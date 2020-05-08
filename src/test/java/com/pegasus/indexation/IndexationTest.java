package com.pegasus.indexation;

import static org.junit.Assert.fail;

import org.junit.jupiter.api.Test;

class IndexationTest {

	@Test
	void testMain() {
		String[] args = {};
		try {
			Indexation.main(args);
		} catch (Exception e) {
			fail();
		}
	}

}
