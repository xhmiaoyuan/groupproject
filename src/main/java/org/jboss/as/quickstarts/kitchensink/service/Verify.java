package org.jboss.as.quickstarts.kitchensink.service;

import java.util.logging.Logger;

import javax.inject.Inject;

import org.jboss.as.quickstarts.kitchensink.data.ClientServer;

public class Verify {
	@Inject
	private ClientServer clientserver;
	@Inject
	private CodeExchange codeexchange;
	
/**
 * give the clientID file and the encryption file
 * return true  if the encryption file is come from the client  or false
 */
	public Boolean verify(byte[] eoo,byte[] doc,String ClientID){
		String publickey=clientserver.getKey(ClientID);
		byte[] pubkey=codeexchange.getbyte(publickey);
		//verify the eoo
		
		return null;
		
	}
}
