# buzzer-jeopardy

.     .    O  .         O
  o       .       .   .    .               .     O
   .  o _.,--------.   O       O    .       o
     ,'"            `.    .            O        .
 O  /                 \     o    .                                    
   f .                 Y                                        
 . |  \________________j  .        o     .      o               
   |  f                Y   .                     .              
  O|  l________________j          .         O                   
   | f|||||l ,--   --.||  O  o      ,-------------------------------------.           
 . | |jjj|l`  ,-.  ,-.|l           f  Hmmm... What is...      			  Y
   j_j,-```  f  | f  ||-.   .      |  A nodejs app to turn smartphones    |            
  f   Y (|   l_0, l_0,| j          l  into buzzers at holiday parties?    j             
  l   jY |       `.   |f   O     .  `-._    ___________________________.,-'            
   `-' `-|,        )  l'            o   )  /    .                
  o    ||f ,-  `--'  _ Y      o      _,' ,'                    
   O   jjj  `.       ,`| `-..___..,-'_.,'    O     o           
     . '''\   `-----'  j      `""""''                           
 .      O  |.        ,'     o                  .                  
    o  .   | `-._.,-'   O         .    o         o                
      ____ |      l ____   .   O                                  
  o ,'-+-->l   -'  Y<--+`.   o                                    
   /+--+,' \`-.__,'| `.+--\      .    .    o                      
  /-+--+`-, \.____,j ,'+--+\  .                   O               
 f--+--+-<   \    /  >-+--+-Y   o       O      .                   
 j--+--+--`.  `. / ,'--+--+-l     O      o                        
f+--+--+--+-`.  Y /-+--+--+--Y  .             o                   
|+--+--+--+--+\ |f--+--+--+--|           .         .              
|+--+-f+--+--+-\|j--+--+Y-+--|  o           o                     
|+--+-|+--+--+--|+--+--+|-+--|                    o               
|+--+-|+--+--+--|+--+--+|-+--|
                                                       
$$\                                                                             
$$ |                                                                            
$$$$$$$\  $$\   $$\ $$$$$$$$\ $$$$$$$$\  $$$$$$\   $$$$$$\                      
$$  __$$\ $$ |  $$ |\____$$  |\____$$  |$$  __$$\ $$  __$$\                     
$$ |  $$ |$$ |  $$ |  $$$$ _/   $$$$ _/ $$$$$$$$ |$$ |  \__|                    
$$ |  $$ |$$ |  $$ | $$  _/    $$  _/   $$   ____|$$ |                          
$$$$$$$  |\$$$$$$  |$$$$$$$$\ $$$$$$$$\ \$$$$$$$\ $$ |                          
\_______/  \______/ \________|\________| \_______|\__|                          
                                                                                
                                                                                
                                                                                
                                                                  $$\           
                                                                  $$ |          
      $$\  $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$\   $$$$$$$ |$$\   $$\ 
      \__|$$  __$$\ $$  __$$\ $$  __$$\  \____$$\ $$  __$$\ $$  __$$ |$$ |  $$ |
      $$\ $$$$$$$$ |$$ /  $$ |$$ /  $$ | $$$$$$$ |$$ |  \__|$$ /  $$ |$$ |  $$ |
      $$ |$$   ____|$$ |  $$ |$$ |  $$ |$$  __$$ |$$ |      $$ |  $$ |$$ |  $$ |
      $$ |\$$$$$$$\ \$$$$$$  |$$$$$$$  |\$$$$$$$ |$$ |      \$$$$$$$ |\$$$$$$$ |
      $$ | \_______| \______/ $$  ____/  \_______|\__|       \_______| \____$$ |
$$\   $$ |                    $$ |                                    $$\   $$ |
\$$$$$$  |                    $$ |                                    \$$$$$$  |
 \______/                     \__|                                     \______/ 


*	Simple app to host holiday jeopardy where each participant's phone becomes a themed buzzer / youtube video caster.
*	Socket.IO implementation for generating a buzzer from you favorite holiday youtube clips.
*	http://localhost -- jeopardy board game, borrowed from (https://jeopardylabs.com/play/christmas-jeopardy16)
*	http://localhost/buzzer -- Bootstrap buzzer, sends messages to board to play specified holiday youtube clip upon question selection.