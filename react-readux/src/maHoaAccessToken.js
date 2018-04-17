const value = "nguyen ba trung";

function run (){
    var M, e = 7, n = 187, d = 23;
    var KyTu = 'X';
    M = KyTu.charCodeAt(0);
    console.log(M);
    var C = mod(M,e,n); //C = M^e mod n
    var m = mod(C,d,n); //m = C^d mod n
}

function mod(m, e, n) // Dùng thuật toán "Bình phương - nhân"
{
   a = [];
   var k = 0;
   do
   {
      a[k] = e % 2;
      k++;
      e = e / 2;
   }
   while (e != 0);

   //Qua trinh lay du
   const kq = 1;
   for (var i = k - 1; i >= 0; i--)
   {
      kq = (kq * kq) % n;
      if (a[i] == 1)
         kq = (kq * m) % n;
   }
   return kq;
}

export default run;