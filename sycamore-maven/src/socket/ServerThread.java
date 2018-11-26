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
	
    private Session session;
	
	public ServerThread(Session s) {
        this.session = s;
        System.out.println("\n\nBuilding new ServerThread(Session s) with ID="+s.getId());
		this.start();
    }
    
    public String getSessionID() {
        return this.session.getId();
    }

	public void sendMessage(String message) {
        System.out.println("sendMessage() in ServerThread.java");
        try {
            this.session.getBasicRemote().sendText("(pong) "+message);
        } catch (IOException e) {
            System.out.println("ioe in ServerThread.sendMessage(String):\t" + e.getMessage());
        }
	}
	public void run() {
            System.out.println("Starting run() in a ServerThread");
    }
    
    @Override
    public String toString ( ) {
        String str = "ID="+this.session.getId();
        return str;
    }
}
