/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        
        
        $("#send").click(function(){
            var City = $("#city").val();
            if(city!==''){
          

            $.ajax({

                url:'http://api.openweathermap.org/data/2.5/weather?q='+ City + "&units=metric"+"&APPID=6cf49942371c8d44556b107edceac87d",
                type:'GET',
                dataType:'json',
                success:function(data){
               var showDetails=show(data);
               $("#show").html(showDetails);
               $("#city").val('');
                
                }
              
         });
        }
        else{
            $('#error').html("field canot be empty");
        }
        });
    
        function show(data){
            return "<h6><strong>CityName:</strong>"+data.name+"</h6>"+
            "<h6>Weather:  "+data.weather[0].main+"</h6>"+
            "<h6>Description:<img src= ' http://openweathermap.org/img/w/"+data.weather[0].icon+".png' >"+data.weather[0].description+"</h6>"+
            "<h6>Temperature: "+data.main.temp+"&deg;c</h6>"+
            "<h6>Pressure:  "+data.main.pressure+"hpa</h6>";
            
        }
       
    },

    // Update DOM on a Received Event
    
};

app.initialize();

   
