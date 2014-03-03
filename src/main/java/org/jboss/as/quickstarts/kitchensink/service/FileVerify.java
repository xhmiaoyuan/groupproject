package org.jboss.as.quickstarts.kitchensink.service;

import java.util.logging.Logger;

import javax.inject.Inject;

import org.jboss.as.quickstarts.kitchensink.data.ClientServer;
import org.jboss.as.quickstarts.kitchensink.data.FileExchangeServer;
import org.jboss.as.quickstarts.kitchensink.data.FileStorage;
import org.jboss.as.quickstarts.kitchensink.model.Client;
import org.jboss.as.quickstarts.kitchensink.model.FileExchange;

public class FileVerify {
	@Inject
	private ClientServer clientserver;
	@Inject
	private FileExchangeServer fileexchangeserver;
	@Inject
	private Verify verifyfil;
	@Inject
	private FileStorage filestorage;
	@Inject
	private Communication communication;
	
	
	/**
	 *a method given a file and Sig(h(doc)) and clientsenderid 
	 *return true or false
	 */
	public Boolean verify(byte[] eoo,byte[] doc,String senderId){
		verifyfil.verify(eoo, doc, senderId);
		return null;
		
	}
	/**
	 * verify the sender and receiver is exist
	 * return fileID if both of them exist
	 */
	public Boolean check(String sender,String receiver){
		
		if(clientserver.SearchClient(sender)&&clientserver.SearchClient(receiver)){
		
			
			return true;
		
		}
		return false;
	}
	/**
	 * Randomly generate a fileID generate a 20 long Srting type(you can get the current time then hash the object)
	 * @param file
	 * @param senderID
	 * @return
	 */
	public String getFileID(){
		
		return null;
		
	}
	/**
	 * create an folder use the name of the fileID and Storage the doc in the catalog
	 * return the folder relative path
	 */
	public void storageDoc(String URL,byte[] doc,byte[] eoo,String filename){
		filestorage.storage(URL, filename, doc); 
		filestorage.storage(URL, "EOO for "+filename, eoo);
				
	}
	/**
	 * storage the FileExchange in the database
	 * 
	 */
	public void Stroage(FileExchange fileexchange){
		fileexchangeserver.save(fileexchange);
		
	}
	/**
	 * send URLto the communication class
	 * 
	 */
	public void giveURL(String url,String fileid,String clientid){
		//communication.Send(email, content);
		
	}
	/**
	 * a method generate a directory and the name of the directory is fileID
	 * @return the URL address about the directory
	 */
	public String generateURL(String fileID){
		return null;
		
	}
	

}
