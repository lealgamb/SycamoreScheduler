package socket;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint("/ss1")
public class ServerSocket {
    // static so that ServerSocket functions like a singleton WebSocket utility class
    private static Vector<ServerThread> threads = new Vector<ServerThread>(); 

	public ServerSocket(){
        
	}
	
	@OnOpen
	public void open(Session session) {
        System.out.println("Connection made! ID=" + session.getId());
		ServerThread st = new ServerThread(session);
        threads.add(st);
        System.out.println("Threads after connect:\n"+threads.toString()+"\n");
	}
	
	@OnMessage
	public void onMessage(String message, Session session) {
        System.out.println("Message! ID=" + session.getId()+"\tMESSAGE="+message);
        for (ServerThread st : threads) {
            st.sendMessage(message);
        }
        System.out.println("Threads after message:\n"+threads.toString()+"\n");

	}
	
	
	@OnClose
	public void close(Session session) {
        System.out.println("Disconnecting! ID=" + session.getId());
        for (int i = 0; i < threads.size(); i++) {
            if (threads.get(i).getSessionID().equals(session.getId())) {
                threads.remove(i);
            }
        }
        System.out.println("Threads after remove:\n"+threads.toString()+"\n");
	}
	
	@OnError
	public void error(Throwable error) {
		System.out.println("Error!");
	}
	
	public void broadcast(String action, ServerThread st) {
		// fill in broadcast here
	}	
}