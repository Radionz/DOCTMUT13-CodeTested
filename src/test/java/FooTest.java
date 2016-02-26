import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FooTest {

    private static Foo foo = new Foo();

    @Test
    public void plusTest(){
        System.out.println("[TEST] Plus test if no mutations occurred");
        // 2 + 1 = 3
        assertEquals(3,foo.plus());
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
        // 2 * 3 = 6
        assertEquals(6,foo.mult());
    }
}
