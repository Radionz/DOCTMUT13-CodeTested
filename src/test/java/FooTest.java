import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FooTest {

    private static Foo foo = new Foo();

    @Test
    public void plusTest(){
        System.out.println("[TEST] Plus test if no mutations occurred");
        // 2 + 1 + 3 + 2 + 1 + 4 + 5 = 18
        assertEquals(18,foo.plus());
    }

    @Test
    public void minusTest(){
        System.out.println("[TEST] Minus test if no mutations occurred");
        // 1 - 3 = -2
        assertEquals(-2,foo.minus());
    }

    @Test
    public void multTest(){
        System.out.println("[TEST] Mult test if no mutations occurred");
        // 2 * 3 * 2 * 1 * 5 * 6 = 360
        assertEquals(360,foo.mult());
    }
}
