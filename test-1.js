 // #1
    test('#isNull, #isNotNull', function () {
      assert.fail(null, 'this is an optional error description - e.g. null is null');
      assert.fail(1, '1 is not null');
    });