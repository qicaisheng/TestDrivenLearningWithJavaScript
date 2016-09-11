describe('Array', () => {
   it('should be able to use length to get the length of Array', () => {
      var array = [1,2,3,4,5,6,7];

      expect(array.length).toBe(7);
   });

   it('should be able to use array1.concat(array2) to get the new array contains array1 and array2', () => {
      var array1 = ['a', 'b', 'c'];
      var array2 = [1, 2, 3];

      var result = array1.concat(array2);

      expect(array1).toEqual(['a', 'b', 'c']);
      expect(result).toEqual(['a', 'b', 'c', 1, 2, 3]);
   });

   it('should be able to use forEach to iterate', () => {
      var array1 = [1, 2, 3, 4, 5, 6];
      var sum = 0;

      var result = array1.forEach((value) => sum += value);

      expect(array1).toEqual([1, 2, 3, 4, 5, 6]);
      expect(result).toBeUndefined();
   });

   it('should be able to use every to get whether every item in array meet the conditions', () => {
      var array1 = [290, 39, 34, -5 ,0 ,-56, 'a'];

      var result = array1.every((value) => value > 0);

      expect(result).toBe(false);
   });

   it('should be able to use some to get whether some item in array meet the conditions', () => {
      var array1 = [290, 39, 34, -5 ,0 ,-56, 'a'];

      var result = array1.some((value) => value > 0);

      expect(result).toBe(true);
   });

   it('should be able to use map to get a new array which every item match operation', () => {
      var array1 = [290, 39, 34, -5 ,0 ,-56, 'a'];

      var result = array1.map((value) => value + 1);

      expect(result).toEqual([291, 40, 35, -4 ,1 ,-55, 'a1']);
   });

   it('should be able to use join to return a string which joined array', () => {
      var array1 = [290, 39, 34, -5 ,0 ,-56, 'a'];

      var result1 = array1.join();
      var result2 = array1.join(' ');
      var result3 = array1.join('+');

      expect(result1).toEqual('290,39,34,-5,0,-56,a');
      expect(result2).toEqual('290 39 34 -5 0 -56 a');
      expect(result3).toEqual('290+39+34+-5+0+-56+a');
   });

   it('should be able to use slice to return a shalldow copy of a portion of an array', () => {
      var array1 = [290, 39, 34, -5, 0, -56, 'a'];

      var result1 = array1.slice(-1);
      var result2 = array1.slice(1,3);
      var result3 = array1.slice(1,-2);

      expect(array1).toEqual([290, 39, 34, -5 ,0 ,-56, 'a']);
      expect(result1).toEqual(['a']);
      expect(result2).toEqual([39, 34]);
      expect(result3).toEqual([39, 34, -5, 0]);
   });

   describe('Array is empty', () => {
      it('forEach', () => {
         var sum = 0;
         var array1 = [];
         var result = [].forEach((value) => sum += value);

         expect(result).toBeUndefined();
         expect(array1).toEqual([]);
      });


      it('every', () => {
         var result = [].every((value) => value === 1);

         expect(result).toBe(true);
      });

      it('some', () => {
         var result = [].some((value) => value === 1);

         expect(result).toBe(false);
      });

      it('map', () => {
         var result = [].map((value) => value + 1);

         expect(result).toEqual([]);
      });
   });

});