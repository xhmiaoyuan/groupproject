package org.jboss.as.quickstarts.kitchensink.rest;

import java.util.List;
import java.util.logging.Logger;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.validation.Validator;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.as.quickstarts.kitchensink.model.Client;
import org.jboss.as.quickstarts.kitchensink.service.ProcessClient;


@Path("/client")
@RequestScoped
public class ClientRest {

	@Inject
	private Logger log;

	@Inject
	private ProcessClient processClient;

	/**
	 * get the request Client
	 * @param id
	 * @return the all the privateKey of the client.
	 */
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public String creatClient(@PathParam("id") String id) {
		
		if(!processClient.verify(id))//verify the id  whether the id has already in used.
		{
			return processClient.generateKey(id);
		}
		return null;
	}
}
