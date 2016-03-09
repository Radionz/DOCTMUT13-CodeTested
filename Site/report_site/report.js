var report = "<?xml version='1.0' encoding='UTF-8' standalone='no'?> \
<mutations name='Projet Salade de fruit'> \
  <mutation name='MutationFraise'>\
    <class name='FooTest' originalPath='../../src/main/java/Foo.java' mutantPath='../generated-sources/spoon/Foo.java'>\
      <method name='plusTest' status='alive'/>\
      <method name='multTest' status='alive'/>\
      <method name='minusTest' status='alive'/>\
    </class>\
    <class name='TriangleTest' originalPath='../../src/main/java/Triangle.java' mutantPath='../generated-sources/spoon/Triangle.java'>\
      <method name='testEquilateral' status='dead'/>\
      <method name='testIsoceles' status='dead'/>\
      <method name='testScalene' status='dead'/>\
      <method name='testGiantTriangle' status='alive'/>\
    </class>\
  </mutation>\
  <mutation name='MutationPomme'>\
    <class name='FooTest' originalPath='../../src/main/java/Foo.java' mutantPath='../generated-sources/spoon/Foo.java'>\
      <method name='plusTest' status='dead'/>\
      <method name='multTest' status='dead'/>\
      <method name='minusTest' status='dead'/>\
    </class>\
    <class name='TriangleTest' originalPath='../../src/main/java/Triangle.java' mutantPath='../generated-sources/spoon/Triangle.java'>\
      <method name='testEquilateral' status='dead'/>\
      <method name='testIsoceles' status='dead'/>\
      <method name='testScalene' status='dead'/>\
      <method name='testGiantTriangle' status='alive'/>\
    </class>\
  </mutation>\
</mutations>";
