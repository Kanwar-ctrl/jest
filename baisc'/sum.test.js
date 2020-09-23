const { exportAllDeclaration } = require('@babel/types');
const sum=require('./sum');
/*
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

// test('adds 1+2 to equals= 3' ,()=>{
//    // expect(sum(1,2)).toBe(3);
//     for (let a=1;a<10;a++){
//         for(let b=1;b<10;b++){
//             expect(a+b).not.toBe(0);
//         }
//     }
// });
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    // expect(compileAndroidCode).toThrow();
    // expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    // expect(compileAndroidCode).toThrow('you are using the wrong JDK');
     expect(compileAndroidCode).toThrow(/wrong/);
  });

 
  // Don't do this!
// test('the data is peanut butter', () => {
//     function callback(data) {
//       expect(data).toBe('peanut butter');
//     }
  
//     fetchData(callback);
//   });

// const fetchData=function(f){
//    return f('peanut butter');
// };
/*
  test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });


let fetchData = new Promise((resolve,rejects )=>{
    let x=true;
    if(x){
        setTimeout( function() {
            resolve("peanut butter")  // Yay! Everything went well!
          }, 250)
    }
    else {
        rejects("error");
    }
    // resolve("peanuts butter");
    //  rejects("error");
});

  test('the data is peanut butter', () => {
    return fetchData.then(data => {
      expect(data).toBe('peanut butter');
    });
  });
  // test('the data is peanut butter', () => {
  //   return expect(fetchData()).resolves.toBe('peanut butter');
  // });
//   // test('the fetch fails with an error', () => {
//   //   expect.assertions(1);
//   //   return fetchData.catch(e => expect(e).toMatch('error'));
//   // });
//   test('the fetch fails with an error', () => {
//     return expect(fetchData).rejects.toMatch('error');
//   });
//   test('the data is peanut butter', () => {
//     return expect(fetchData).resolves.toBe('peanut butter');
//   });


  const fetchData1=function(){
       return 'peanut butter';
    };

    test('the data is peanut butter', async () => {
      const data = await fetchData1();
      expect(data).toBe('peanut butter');
    });
    
    // test('the fetch fails with an error', async () => {
    //   expect.assertions(1);
    //   try {
    //     await fetchData1;
    //   } catch (e) {
    //     expect(e).toMatch('error');
    //   }
    // });

*/
    let cities=[];
    function initializationCityDatabase(){
      cities.push('Vienna');
      cities.push('San Juan');
    }
    function clearCityDatabase(){
      cities=[];
    }
    function isCity(name){
      return cities.includes(name);
    }
    beforeEach(()=>{
      initializationCityDatabase();
    });

    afterEach(()=>{
      clearCityDatabase();
    });


    test("city database has Vieana",()=>{
      expect(isCity("Vienna")).toBeTruthy();
    });

    test("city database has San Juan",()=>{
      expect(isCity("San Juan")).toBeTruthy();
    });
