 $("#form-part").submit(function(event){
      //prevent default php processing
      event.preventDefault();
      //collect user inputs
      
      var datatopost = $(this).serializeArray();
      //debugger;
      //send them to signup.php using ajax
      $.ajax ({
            url: "form-handle.php",
            type: 'POST',
            data: datatopost,

        //ajax call|:sucessful :show error or suceess message
            success: function(data){
               
              if(typeof data == "string" && data.indexOf("Please enter your name") > -1){
                 var res = data.match(/Please enter your name/gi);

                $("#errNamemsg").html(res);
                $(".Uname").addClass('redbor');

              }
              if(typeof data == "string" && data.indexOf("Please enter a valid email address") > -1){
                var res1 = data.match(/Please enter a valid email address/gi);
                
                 $("#errEmailmsg").html(res1);
                 $(".Uemail").addClass('redbor');
                

              }
               if(typeof data == "string" && data.indexOf("Please enter your message") > -1){
               var res2 = data.match(/Please enter your message/gi);
                $("#errMessagemsg").html(res2);
                $(".Umessage").addClass('redbor');

              }
              if(typeof data == "string" && data.indexOf("Thank you! mail has been sent. We will contact you soon") > -1){
                
              $("#errormessage").html(data);
              $("#name").val("");
              $(".Uname").removeClass('redbor');
              $("#errNamemsg").html("");

              $("#errEmailmsg").html("");
              $("#email").val("");
              $(".Uemail").removeClass('redbor');

              $("#errMessagemsg").html("");
              $("#textarea-style").val("");
              $(".Umessage").removeClass('redbor');
            }
              
            },
            //ajax call fails: show Ajax call error
            error: function(){

               $("#errorMessage").html("<div class='alert alert-danger'>There was an error with ajax call.Please try again ltr</div>");

            }


      });


    });
