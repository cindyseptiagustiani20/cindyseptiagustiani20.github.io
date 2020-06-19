function getUpdate(id) {
	var id = id;
	$.ajax({
		url: "DataBudgets/UV_budgets.php",
		type: "GET",
		data: {id: id,},
		success: function(ajaxData) {
			$("#editbudgets").html(ajaxData);
			$("#editbudgets").modal("show",{backdrop: "true"});
		}

	});
}
$(document).ready(function() {
	$("#example").on("click",".editbudgets",function() {
		var m = $(this).attr("id");
		$.ajax({
			url:"DataBudgets/UV_budgets.php",
			type: "GET",
			data: {id: m,},
			success: function(ajaxData){
				$("#editbudgets").html(ajaxData);
				$("#editbudgets").modal("show",{backdrop: "true"});
			}
		});
	});
});

function getUpdate(id) {
	var id = id;
	$.ajax({
		url: "DataAdmin/UV_admin.php",
		type: "GET",
		data: {id: id,},
		success: function(ajaxData) {
			$("#editadmin").html(ajaxData);
			$("#editadmin").modal("show",{backdrop: "true"});
		}

	});
}
$(document).ready(function() {
	$("#example").on("click",".editadmin",function() {
		var m = $(this).attr("id");
		$.ajax({
			url:"DataAdmin/UV_admin.php",
			type: "GET",
			data: {id: m,},
			success: function(ajaxData){
				$("#editadmin").html(ajaxData);
				$("#editadmin").modal("show",{backdrop: "true"});
			}
		});
	});
});

function getUpdate(id) {
	var id = id;
	$.ajax({
		url: "DataAdmin/UV_pass_admin.php",
		type: "GET",
		data: {id: id,},
		success: function(ajaxData) {
			$("#editpass").html(ajaxData);
			$("#editpass").modal("show",{backdrop: "true"});
		}

	});
}
$(document).ready(function() {
	$("#example").on("click",".editpass",function() {
		var m = $(this).attr("id");
		$.ajax({
			url:"DataAdmin/UV_pass_admin.php",
			type: "GET",
			data: {id: m,},
			success: function(ajaxData){
				$("#editpass").html(ajaxData);
				$("#editpass").modal("show",{backdrop: "true"});
			}
		});
	});
});

function getUpdate(id) {
	var id = id;
	$.ajax({
		url: "DataKategori/UV_kategori.php",
		type: "GET",
		data: {id: id,},
		success: function(ajaxData) {
			$("#editkategori").html(ajaxData);
			$("#editkategori").modal("show",{backdrop: "true"});
		}

	});
}
$(document).ready(function() {
	$("#example").on("click",".editkategori",function() {
		var m = $(this).attr("id");
		$.ajax({
			url:"DataKategori/UV_kategori.php",
			type: "GET",
			data: {id: m,},
			success: function(ajaxData){
				$("#editkategori").html(ajaxData);
				$("#editkategori").modal("show",{backdrop: "true"});
			}
		});
	});
});



function getUpdate(id) {
	var id = id;
	$.ajax({
		url: "DataPengeluaran/UV_pengeluaran.php",
		type: "GET",
		data: {id: id,},
		success: function(ajaxData) {
			$("#editpengeluaran").html(ajaxData);
			$("#editpengeluaran").modal("show",{backdrop: "true"});
		}

	});
}
$(document).ready(function() {
	$("#example").on("click",".editpengeluaran",function() {
		var m = $(this).attr("id");
		$.ajax({
			url:"DataPengeluaran/UV_pengeluaran.php",
			type: "GET",
			data: {id: m,},
			success: function(ajaxData){
				$("#editpengeluaran").html(ajaxData);
				$("#editpengeluaran").modal("show",{backdrop: "true"});
			}
		});
	});
});