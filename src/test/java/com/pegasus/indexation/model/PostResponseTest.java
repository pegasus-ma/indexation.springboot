package com.pegasus.indexation.model;

import static org.junit.Assert.assertSame;

import org.junit.Before;
import org.junit.Test;

public class PostResponseTest {

	private PostResponse postResponse;

	@Before
	public void init() {
		postResponse = new PostResponse();
	}

	@Test
	public final void testGetState() {
		String stateString = "200";
		postResponse.setState(stateString);
		assertSame("Failure", stateString, postResponse.getState());
	}

	@Test
	public final void testSetState() {
		String stateString = "200";
		postResponse.setState(stateString);
		assertSame("Failure", stateString, postResponse.getState());
	}

}
