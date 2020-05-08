package com.pegasus.indexation.util;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;

class SslUtilTest {

	@Test
	void test() {
		try {
			SslUtil.ignoreSsl();
		} catch (Exception e) {
			fail("Exception");
		}
	}

}
