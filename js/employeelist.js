

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});
var ret = [

[12,'Steven','Wells',4,'Software Architect','Engineering','617-000-0012','781-000-0012','swells@fakemail.com','Boston, MA','steven_wells.jpg'],
[11,'Amy','Jones',5,'Sales Representative','Sales','617-000-0011','781-000-0011','ajones@fakemail.com','Boston, MA','amy_jones.jpg'],
[10,'Kathleen','Byrne',5,'Sales Representative','Sales','617-000-0010','781-000-0010','kbyrne@fakemail.com','Boston, MA','kathleen_byrne.jpg'],
[9,'Gary','Donovan',2,'Marketing','Marketing','617-000-0009','781-000-0009','gdonovan@fakemail.com','Boston, MA','gary_donovan.jpg'],
[8,'Lisa','Wong',2,'Marketing Manager','Marketing','617-000-0008','781-000-0008','lwong@fakemail.com','Boston, MA','lisa_wong.jpg'],
[7,'Paula','Gates',4,'Software Architect','Engineering','617-000-0007','781-000-0007','pgates@fakemail.com','Boston, MA','paula_gates.jpg'],
[5,'Ray','Moore',1,'VP of Sales','Sales','617-000-0005','781-000-0005','rmoore@fakemail.com','Boston, MA','ray_moore.jpg'],
[6,'Paul','Jones',4,'QA Manager','Engineering','617-000-0006','781-000-0006','pjones@fakemail.com','Boston, MA','paul_jones.jpg'],
[3,'Eugene','Lee',1,'CFO','Accounting','617-000-0003','781-000-0003','elee@fakemail.com','Boston, MA','eugene_lee.jpg'],
[4,'John','Williams',1,'VP of Engineering','Engineering','617-000-0004','781-000-0004','jwilliams@fakemail.com','Boston, MA','john_williams.jpg'],
[2,'Julie','Taylor',1,'VP of Marketing','Marketing','617-000-0002','781-000-0002','jtaylor@fakemail.com','Boston, MA','julie_taylor.jpg'],
[1,'James','King',0,'President and CEO','Corporate','617-000-0001','781-000-0001','jking@fakemail.com','Boston, MA','james_king.jpg']
];

var ke = [
  "0id",
  "1firstName",
  "2lastName",
  "3managerId",
  "4title",
  "5department",
  "6officePhone",
  "7cellPhone",
  "8email",
  "9city",
  "10picture"
  ];




function getEmployeeList() {

	
	$('#employeeList li').remove();
	employees = ret;
	$.each(employees, function(index, employee) {
		$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee[0] + '">' +
				'<img src="pics/' + employee[10] + '"/>' +
				'<h4>' + employee[1] + ' ' + employee[2] + '</h4>' +
				'<p>' + employee[4] + '</p>' +
				'<span class="ui-li-count">' + employee[3] + '</span></a></li>');
	});
	$('#employeeList').listview('refresh');
	
}