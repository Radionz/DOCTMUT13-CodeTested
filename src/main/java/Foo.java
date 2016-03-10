/**
 * Foo class in order to test some mutations
 */
public class Foo {
    public Foo() {
    }

    // Should return 2 + 1 + 3 + 2 + 1 + 4 + 5 = 18
    public int plus(){
        return 2 + 1 + 3 + 2 + 1 + 4 + 5;
    }

    // Should return 1 - 3 = -2
    public int minus(){
        return 1 - 3;
    }

    // Should return 2 * 3 * 2 * 1 * 5 * 6 = 360
    public int mult(){
        return 2 * 3 * 2 * 1 * 5 * 6;
    }
}
