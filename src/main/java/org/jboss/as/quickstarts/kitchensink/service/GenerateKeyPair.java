package org.jboss.as.quickstarts.kitchensink.service;

public class GenerateKeyPair {
	private byte[] privatekey;
	private byte[] publickey;
	
	public byte[] getPrivatekey() {
		return privatekey;
	}
	public byte[] getPublickey() {
		return publickey;
	}
	private String clientID;
	/**
	 * construction give a client id generate a pair Key
	 * 
	 */
	public GenerateKeyPair(String clientID){
		this.clientID=clientID;
		generate(clientID);
	}
	/**
	 * based on the clientID generate two key and storage in in the privatekey and publickey.
	 * @param clientID
	 */
	public void generate(String clientID){
		
	}

}
