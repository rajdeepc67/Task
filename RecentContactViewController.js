({
    init: function (cmp, event, helper) {
      cmp.set('v.columns', [
            {label: 'Contact Name', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}}
           
        ]);
      var recId=cmp.get("v.recordId");
      console.log('----------->'+recId);
      var action = cmp.get("c.getContact");           
          action.setCallback(this,function(response){
          var state=response.getState();
          if(state==="SUCCESS"){
          var returnValue=response.getReturnValue();
          returnValue.forEach(function(record){
          record.linkName='/lightning/r/Contact/'+record.Id+'/view';
          });
          cmp.set("v.data",returnValue);
          }
          });   
      $A.enqueueAction(action);
       
    }
})
