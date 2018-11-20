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
import java.util.Vector;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint("/ss1")
public class ServerSocket {
	private Vector<ServerThread> serverThreads;
	private static Vector<Session> sessionVector = new Vector<Session>();
	public ObjectOutputStream oos;
	public ObjectInputStream ois;
	
	public BufferedReader in;
	public FileWriter fstream;
	public BufferedWriter out;

	public ServerSocket(){
		serverThreads = new Vector<ServerThread>();
	}
	
	@OnOpen
	public void open(Session session) {
		System.out.println("Connection made!");
		sessionVector.add(session);
		try {
			fstream = new FileWriter("file.txt");
			out = new BufferedWriter(fstream);
			in = new BufferedReader(new FileReader("file.txt"));

			ChatClient c = new ChatClient(out, in);
			
			ServerThread st = new ServerThread(this, out, in);
			serverThreads.add(st);
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@OnMessage
	public void onMessage(String message, Session session) {
		try {
			System.out.println("onMessage: " + message);
	
			out.write(message);
			out.flush();
			
		} catch (IOException ioe) {
			System.out.println("ioe: " + ioe.getMessage());
			close(session);
		}
	}
	
	
	@OnClose
	public void close(Session session) {
		System.out.println("Disconnecting!");
		sessionVector.remove(session);
	}
	
	@OnError
	public void error(Throwable error) {
		System.out.println("Error!");
	}
	
	public void broadcast(String action, ServerThread st) {
		if(action != null) {
			for(ServerThread thread : serverThreads) {
				System.out.println("broadcast, iterating through threads");
				System.out.println("thread send in ServerSocket: " + action);
				String res = thread.sendMessage(action);
				for(Session s : sessionVector) {
					try {
						s.getBasicRemote().sendText(res);
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
		}
	}	
}