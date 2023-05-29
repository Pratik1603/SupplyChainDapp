// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Tracking {
    enum ShipmentStatus {PENDING,IN_TRANSIT,DELIVERED}
    struct Shipment{
        address sender;
        address receiver;
        uint pickupTime;
        uint deliveryTime;
        uint distance;
        uint price;
        ShipmentStatus status;
        bool isPaid;
    }

    mapping(address=>Shipment[])public shipments;
    uint public shipmentCount;

    struct TypeShipment{
        address sender;
        address receiver;
        uint pickupTime;
        uint deliveryTime;
        uint distance;
        uint price;
        ShipmentStatus status;
        bool isPaid;
    }

    TypeShipment[] typeShipments;

    event ShipmentCreated(address indexed sender,address indexed receiver,uint pickupTime,uint distance,uint price);
    event ShipmentInTransit(address indexed sender,address indexed receiver,uint pickupTime);
    event ShipmentDelivered(address indexed sender,address indexed receiver,uint deliveryTime);
    event ShipmentPaid(address indexed sender,address indexed receiver,uint amount);
    constructor() {
        shipmentCount=0;
    }

    function createShipment(address _receiver,uint _pickupTime,uint _distance,uint _price) public payable{
         require(msg.value==_price,"Payment Insufficient");
         Shipment memory shipment=Shipment(msg.sender,_receiver,_pickupTime,0,_distance,_price,ShipmentStatus.PENDING,false);
         shipments[msg.sender].push(shipment);
         shipmentCount++;

         typeShipments.push(TypeShipment(
            msg.sender,
            _receiver,
            _pickupTime,
            0,
            _distance,
            _price,
            ShipmentStatus.PENDING,
            false

         ));
         emit ShipmentCreated(msg.sender,
            _receiver,
            _pickupTime,
      
            _distance,
            _price
         );
    }


    function startShipment(address _sender,address _receiver,uint _index) public {
      Shipment storage shipment=shipments[_sender][_index];  
      TypeShipment storage typeShipment=typeShipments[_index];  
      require(shipment.receiver==_receiver,"Invalid Receiver");
      require(shipment.status==ShipmentStatus.PENDING,"Shipment already in transit");
      shipment.status=ShipmentStatus.IN_TRANSIT;
      typeShipment.status=ShipmentStatus.IN_TRANSIT;

      emit ShipmentInTransit(_sender,_receiver,shipment.pickupTime);
    } 
    function completeShipment(address _sender,address _receiver,uint _index) public {
      Shipment storage shipment=shipments[_sender][_index];  
      TypeShipment storage typeShipment=typeShipments[_index];  
      require(shipment.receiver==_receiver,"Invalid Receiver");
      require(shipment.status==ShipmentStatus.IN_TRANSIT,"Shipment not in transit");
      require(!shipment.isPaid,"Shipment Already Paid");
      shipment.status=ShipmentStatus.DELIVERED;
      typeShipment.status=ShipmentStatus.DELIVERED;
      typeShipment.deliveryTime=block.timestamp;
      shipment.deliveryTime=block.timestamp;
      uint amount=shipment.price;
      payable(shipment.sender).transfer(amount);
      shipment.isPaid=true;
      typeShipment.isPaid=true;
      

      emit ShipmentDelivered(_sender,_receiver,shipment.deliveryTime);
      emit ShipmentPaid(_sender,_receiver,amount);
    } 


  function getShipment(address _sender,uint256 _index) public view returns (address,address,uint,uint,uint,uint,ShipmentStatus,bool){
  Shipment memory shipment=shipments[_sender][_index];
  return(shipment.sender,shipment.receiver,shipment.pickupTime,shipment.deliveryTime,shipment.distance,shipment.price,shipment.status,shipment.isPaid);
  }
  function getShipmentCount(address _sender) public view returns(uint){
      return shipments[_sender].length;
  }
  function getAllTransaction() public view returns(TypeShipment[] memory) {
      return typeShipments;
  }
}