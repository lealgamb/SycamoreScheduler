package socket;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.websocket.Session;

import driver.JDBCDriver;
import com.google.gson.Gson;


//deal with threads
public class ServerThread extends Thread{
	
	private ObjectInputStream ois;
	private ObjectOutputStream oos;
	private ServerSocket ss;
	
	private BufferedWriter bw;
	private BufferedReader br;
	
	public ServerThread(ServerSocket  ss, BufferedWriter bw, BufferedReader br) {
		this.ss = ss;
		this.br = br;
		this.bw = bw;

		this.start();
	}

	public String sendMessage(String info) {
		try{
			System.out.println("sendMessage in ServerThread before write: "+ info);
			bw.write(info);
			bw.flush();
			System.out.println("sendMessage in ServerThread: " + info);
			
			//ArrayList<String> classes = new ArrayList<String>();
				// Get the parameter
				String[] infoArr = info.split(",");
			    String email = infoArr[0];
			    
			    // Check if the parameter is null and send an error message if so
			    
			   // if (email == null) {
			    //  response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing course plan email parameter.");
			    //}
			   // else {
			      Map<String, ArrayList<ArrayList<String>>> schedule = JDBCDriver.getSchedule(email);
			      
			      // Check if the schedule can be retrieved
			    //  if (schedule != null) {
			        // Successfully retrieved the schedule
			        
			        // Communicate with the front-end
			        String scheduleJSON = new Gson().toJson(schedule);
			       // response.setContentType("application/json");
			        //response.setCharacterEncoding("UTF-8");
			        // Get the writer
			      //  PrintWriter pw = response.getWriter();
			       // pw.write(scheduleJSON);
			       // pw.flush();
			   //   }
			     // else {
			        // Failed to retrieve classes
			     //   response.sendError(HttpServletResponse.SC_BAD_REQUEST, 
			     //       "Failed to retreive classes for " + email + " from the database.");
			     // }
			   // }
					
			return scheduleJSON;
		}catch(IOException ioe) {
			System.out.println("ioe in sendMessage: " + ioe.getMessage());
		}
		return "";
	}
	public void run() {
			while(true) {
				String info;
				try {
					info = br.readLine();
					
					if(info != null) {
						System.out.println("run in ServerThread:" + info);
						ss.broadcast(info, this);
					}
				} catch (IOException ioe) {
					System.out.println("ioe in ST.run(): " + ioe.getMessage());
				}		
			}
	}
}
