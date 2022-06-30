function convert() {
   let idxFromUnits = document.getElementById("fromUnits").selectedIndex;
   let idxToUnits = document.getElementById("toUnits").selectedIndex;
   let input = document.getElementById("txtInput").value;

   //document.getElementById("fromUnitsTest").innerHTML = "From Units Index:" + idxFromUnits;
   //document.getElementById("toUnitsTest").innerHTML = "To Units Index:" + idxToUnits;

   if (idxFromUnits == -1 || idxToUnits == -1) {
      alert("Please select Units to Convert")
   }

   // PhilippinePesoTo

   else if (idxFromUnits == 0 && idxToUnits == 1) {
      convertPhilippinePesoToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 0 && idxToUnits == 2) {
      convertPhilippinePesoToEuro(input);
   }
   else if (idxFromUnits == 0 && idxToUnits == 3) {
      convertPhilippinePesoToJapaneseYen(input);
   }
   else if (idxFromUnits == 0 && idxToUnits == 4) {
      convertPhilippinePesoToPoundSterling(input);
   }
   else if (idxFromUnits == 0 && idxToUnits == 5) {
      convertPhilippinePesoToBahrainiDinar(input);
   }
   else if (idxFromUnits == 0 && idxToUnits == 6) {
      convertPhilippinePesoToChineseYuan(input);
   }

   // UnitedStatesDollarTo

   else if (idxFromUnits == 1 && idxToUnits == 0) {
      convertUnitedStatesDollarToPeso(input);
   }
   else if (idxFromUnits == 1 && idxToUnits == 2) {
      convertUnitedStatesDollarToEuro(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 3) {
      convertUnitedStatesDollarToJapaneseYen(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 4) {
      convertUnitedStatesDollarToPoundSterling(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 5) {
      convertUnitedStatesDollarToBahrainiDinar(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 6) {
      convertUnitedStatesDollarToChineseYuan(input);
   }

   // EuroTo

   else if (idxFromUnits == 2 && idxToUnits == 0) {
      convertEuroToPhilippinePeso(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 1) {
      convertEuroToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 3) {
      convertEuroToJapaneseYen(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 4) {
      convertEuroToPoundSterling(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 5) {
      convertEuroToBahrainiDinar(input);
   }
   else if (idxFromUnits == 2 && idxToUnits == 6) {
      convertEuroToChineseYuan(input);
   }

   //  JapaneseYen

   else if (idxFromUnits == 3 && idxToUnits == 0) {
      convertJapaneseYenToPhilippinePeso(input);
   }
   else if (idxFromUnits == 3 && idxToUnits == 1) {
      convertJapaneseYenToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 3 && idxToUnits == 2) {
      convertJapaneseYenToEuro(input);
   }
   else if (idxFromUnits == 3 && idxToUnits == 4) {
      convertJapaneseYenToPoundSterling(input);
   }
   else if (idxFromUnits == 3 && idxToUnits == 5) {
      convertJapaneseYenToBahrainiDinar(input);
   }
   else if (idxFromUnits == 3 && idxToUnits == 6) {
      convertJapaneseYenToChineseYuan(input);
   }
   // PoundSterling

   else if (idxFromUnits == 4 && idxToUnits == 0) {
      convertPoundSterlingToPhilippinePeso(input);
   }
   else if (idxFromUnits == 4 && idxToUnits == 1) {
      convertPoundSterlingToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 4 && idxToUnits == 2) {
      convertPoundSterlingToEuro(input);
   }
   else if (idxFromUnits == 4 && idxToUnits == 3) {
      convertPoundSterlingToJapaneseYen(input);
   }
   else if (idxFromUnits == 4 && idxToUnits == 5) {
      convertPoundSterlingToBahrainiDinar(input);
   }
   else if (idxFromUnits == 4 && idxToUnits == 6) {
      convertPoundSterlingToChineseYuan(input);
   }

   // BahrainiDinar

   else if (idxFromUnits == 5 && idxToUnits == 0) {
      convertBahrainiDinarToPhilippinePeso(input);
   }
   else if (idxFromUnits == 5 && idxToUnits == 1) {
      convertBahrainiDinarToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 5 && idxToUnits == 2) {
      convertBahrainiDinarToEuro(input);
   }
   else if (idxFromUnits == 5 && idxToUnits == 3) {
      convertBahrainiDinarToJapaneseYen(input);
   }
   else if (idxFromUnits == 5 && idxToUnits == 4) {
      convertBahrainiDinarToPoundSterling(input);
   }
   else if (idxFromUnits == 5 && idxToUnits == 6) {
      convertBahrainiDinarToChineseYuan(input);
   }

   // ChineseYuan

   else if (idxFromUnits == 6 && idxToUnits == 0) {
      convertChineseYuanToPhilippinePeso(input);
   }
   else if (idxFromUnits == 6 && idxToUnits == 1) {
      convertChineseYuanToUnitedStatesDollar(input);
   }
   else if (idxFromUnits == 6 && idxToUnits == 2) {
      convertChineseYuanToEuro(input);
   }
   else if (idxFromUnits == 6 && idxToUnits == 3) {
      convertChineseYuanToJapaneseYen(input);
   }
   else if (idxFromUnits == 6 && idxToUnits == 4) {
      convertChineseYuanToPoundSterling(input);
   }
   else if (idxFromUnits == 6 && idxToUnits == 5) {
      convertChineseYuanToBahrainiDinar(input);
   }


   // function convertPhilippinePeso
   function convertPhilippinePesoToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 0.018125;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertPhilippinePesoToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 0.0171875;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertPhilippinePesoToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 2.4559375;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertPhilippinePesoToPoundSterling(enteredValue) {
      var PoundSterling = 0;
      PoundSterling = enteredValue * 0.015;
      document.getElementById("result").innerHTML = PoundSterling;
   }
   function convertPhilippinePesoToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.006875;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
   function convertPhilippinePesoToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 0.1221875;
      document.getElementById("result").innerHTML = ChineseYuan;
   }

   //  function  convertUnitedStatesDollar

   function convertUnitedStatesDollarToPeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 54.8375;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertUnitedStatesDollarToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 0.9490625;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertUnitedStatesDollarToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 134.751875;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertUnitedStatesDollarToPoundSterling(enteredValue) {
      var PoundSterling = 0;
      PoundSterling = enteredValue * 0.814375;
      document.getElementById("result").innerHTML = PoundSterling;
   }
   function convertUnitedStatesDollarToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.3771875;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
   function convertUnitedStatesDollarToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 6.695625;
      document.getElementById("result").innerHTML = ChineseYuan;
   }
   //  function convertEuro

   function convertEuroToPhilippinePeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 57.759375;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertEuroToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 1.0534375;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertEuroToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 141.9696875;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertEuroToPoundSterling(enteredValue) {
      var Mi = 0;
      Mi = enteredValue * 0.858125;
      document.getElementById("result").innerHTML = Mi;
   }
   function convertEuroToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.3971875;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
   function convertEuroToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 7.053475;
      document.getElementById("result").innerHTML = ChineseYuan;
   }

   //  function convertJapaneseYen

   function convertJapaneseYenToPhilippinePeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 0.4075;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertJapaneseYenToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 0.0075;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertJapaneseYenToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 0.0071875;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertJapaneseYenToPoundSterling(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 0.0059375;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertJapaneseYenToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.0028125;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
   function convertJapaneseYenToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 0.0496875;
      document.getElementById("result").innerHTML = ChineseYuan;
   }

   //  function convertPoundSterling

   function convertPoundSterlingToPhilippinePeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 67.314375;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertPoundSterlingToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 1.2275;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertPoundSterlingToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 1.1653125;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertPoundSterlingToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 165.3034375;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertPoundSterlingToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.4628125;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
   function convertPoundSterlingToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 8.218125;
      document.getElementById("result").innerHTML = ChineseYuan;
   }

   // function convertBahrainiDinar

   function convertBahrainiDinarToPhilippinePeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 145.4771875;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertBahrainiDinarToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 2.6528125;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertBahrainiDinarToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 2.5184375;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertBahrainiDinarToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 357.2409375;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertBahrainiDinarToPoundSterling(enteredValue) {
      var PoundSterling = 0;
      PoundSterling = enteredValue * 2.16125;
      document.getElementById("result").innerHTML = PoundSterling;
   }
   function convertBahrainiDinarToChineseYuan(enteredValue) {
      var ChineseYuan = 0;
      ChineseYuan = enteredValue * 17.7615625;
      document.getElementById("result").innerHTML = ChineseYuan;
   }

   // function convertChineseYuan

   function convertChineseYuanToPhilippinePeso(enteredValue) {
      var PhilippinePeso = 0;
      PhilippinePeso = enteredValue * 8.1909375;
      document.getElementById("result").innerHTML = PhilippinePeso;
   }
   function convertChineseYuanToUnitedStatesDollar(enteredValue) {
      var UnitedStatesDollar = 0;
      UnitedStatesDollar = enteredValue * 0.149375;
      document.getElementById("result").innerHTML = UnitedStatesDollar;
   }
   function convertChineseYuanToEuro(enteredValue) {
      var Euro = 0;
      Euro = enteredValue * 0.141875;
      document.getElementById("result").innerHTML = Euro;
   }
   function convertChineseYuanToJapaneseYen(enteredValue) {
      var JapaneseYen = 0;
      JapaneseYen = enteredValue * 20.1240625;
      document.getElementById("result").innerHTML = JapaneseYen;
   }
   function convertChineseYuanToPoundSterling(enteredValue) {
      var PoundSterling = 0;
      PoundSterling = enteredValue * 0.1215625;
      document.getElementById("result").innerHTML = PoundSterling;
   }
   function convertChineseYuanToBahrainiDinar(enteredValue) {
      var BahrainiDinar = 0;
      BahrainiDinar = enteredValue * 0.05625;
      document.getElementById("result").innerHTML = BahrainiDinar;
   }
}