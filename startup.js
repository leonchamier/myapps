//Timesheet view
restrictedview=true;

emailsearch='ContactsEmailSearch.htm';

fileDSN="payroll.dsn";
count=0;
COMPANY  =1; 
COMPANYNAME  ='TEST';

//****************** Set program-defined system values**
  sysval=new Object();
  sysval.usedepcode=false;

glo_dedbasis=[];
glo_dedbasis['Fixed']='Fixed';
glo_dedbasis['Percentage']='Percentage(%)';
glo_dedbasis['Tiered']='Tiered';
glo_dedbasis['Range']='Range';
glo_dedbasis['Tiered']='Tiered';
glo_dedbasis['Function']='Function';
glo_dedbasis['YTD']='Year-To-Date';


  sqlselecttype='php'; 
  submitsqlodbc='';

 


dbasetype='sqlserver';
submitsqlpath="http://66.151.37.33/AdvantumPayroll/pcstools/mphpsql.php";


