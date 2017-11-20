function api(type,url,params,successback,errorback){
  jQuery.ajax({
    type: type,
    url: url,
    data: params,
    dataType : "jsonp",
    success:function(res){
      successback(res)
    },
    error:function(err){
      errorback(err)
    }
  })
}

// (function(){

// })()