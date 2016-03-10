var report = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<mutations>\
  <mutation name="EqualsProcessor">\
    <class name="FooTest" aliveMutant="2" deadMutant="1">\
      <codeOriginal></codeOriginal>\
      <codeMutant></codeMutant>\
      <codeTest></codeTest>\
      <method name="plusTest" status="dead" time="0.001"/>\
      <method name="multTest" status="alive" time="0"/>\
      <method name="minusTest" status="alive" time="0"/>\
    </class>\
    <class name="TriangleTest" aliveMutant="2" deadMutant="2" >\
      <codeOriginal></codeOriginal>\
      <codeMutant></codeMutant>\
      <codeTest></codeTest>\
      <method name="testEquilateral" status="dead" time="0"/>\
      <method name="testIsoceles" status="alive" time="0"/>\
      <method name="testScalene" status="dead" time="0"/>\
      <method name="testGiantTriangle" status="alive" time="0"/>\
    </class>\
  </mutation>\
  <mutation name="PlusProcessor">\
    <class name="FooTest" aliveMutant="0" deadMutant="3">\
      <codeOriginal></codeOriginal>\
      <codeMutant></codeMutant>\
      <codeTest></codeTest>\
      <method name="plusTest" status="dead" time="0.001"/>\
      <method name="multTest" status="dead" time="0"/>\
      <method name="minusTest" status="dead" time="0"/>\
    </class>\
    <class name="TriangleTest" aliveMutant="1" deadMutant="3">\
      <codeOriginal></codeOriginal>\
      <codeMutant></codeMutant>\
      <codeTest></codeTest>\
      <method name="testEquilateral" status="dead" time="0"/>\
      <method name="testIsoceles" status="alive" time="0"/>\
      <method name="testScalene" status="dead" time="0"/>\
      <method name="testGiantTriangle" status="dead" time="0"/>\
    </class>\
  </mutation>\
</mutations>';
