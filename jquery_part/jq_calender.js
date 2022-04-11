$(function() {
	//  $( "#datepicker" ).datepicker();
	//$( "#datepicker" ).datepicker( 'setDate', '10/12/2012' );
        //모든 datepicker에 대한 공통 옵션 설정
        var thisDate = new Date();
        var thisYear = thisDate.getFullYear();        //해당 연
        var thisMonth = thisDate.getMonth() + 1;    //해당 월
 
        $.datepicker.setDefaults({
            dateFormat: 'yy-mm-dd'         //Input Display Format 변경
            ,showOtherMonths: true         //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            ,showMonthAfterYear:true     //년도 먼저 나오고, 뒤에 월 표시
            ,changeYear: true             //콤보박스에서 년 선택 가능
            ,changeMonth: true             //콤보박스에서 월 선택 가능         
            ,yearSuffix: "년"             //달력의 년도 부분 뒤에 붙는 텍스트
            ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12']                     //달력의 월 부분 텍스트
            ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
            ,dayNamesMin: ['일','월','화','수','목','금','토']                                         //달력의 요일 부분 텍스트
            ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']                 //달력의 요일 부분 Tooltip 텍스트
        });                    
       // $( ".selector" ).datepicker( "setDate", "2022/06/11" );
 //$('#datepicker').datepicker('setDate', "2022/06/11");
        //시작일의 초기값을 설정
        $('#datepicker').datepicker({
            onClose: function( selectedDate ) {    
                $("#datepicker").datepicker( "option", "minDate", selectedDate );
                // 시작일(sDatepicker) datepicker가 닫힐때
                // 종료일(eDatepicker)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            }                
        });
        $('#datepicker').datepicker('setDate', thisYear+'-'+thisMonth+'-01');    //시작일 초기값 셋팅
     //   $('#datepicker').datepicker('setDate', "2022/06/11");
        //종료일의 초기값을 내일로 설정
        $('#datepicker').datepicker({
            onClose: function( selectedDate ) {
                $("#datepicker").datepicker( "option", "maxDate", selectedDate );
                // 종료일(eDatepicker) datepicker가 닫힐때
                // 시작일(eDatepicker)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정 
            }
        });
        $('#datepicker').datepicker('setDate', 'today');                        //끝일 초기값 셋팅
//$('#datepicker').datepicker('setDate', "2022/06/11");
    });