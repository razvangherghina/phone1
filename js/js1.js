

document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("test", "1.0", "Test DB", 2 * 1024 * 1024);
        db.transaction(function (tx) {
		   tx.executeSql('CREATE TABLE IF NOT EXISTS USERDB (token unique, name)');
		   //tx.executeSql('INSERT INTO USERDB (token, name) VALUES (1, "foobar")');
		   //tx.executeSql('INSERT INTO USERDB (token, name) VALUES (2, "logmsg")');
		});
		$("#loginB").hide();
		db.transaction(function (tx) {
		   tx.executeSql('SELECT * FROM USERDB', [], function (tx, results) {
		   var len = results.rows.length, i;
		   msg = "<p>Found rows: " + len + "</p>";
		   document.querySelector('#status').innerHTML +=  msg;
		   for (i = 0; i < len; i++){
		      alert(results.rows.item(i).log );
		   }
		 }, null);
		});
    }