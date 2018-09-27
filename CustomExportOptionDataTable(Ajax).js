
		jQuery(window).load(function()
		{
			var $ = jQuery;

			var table = $("#table-2").DataTable({
				dom: 'Brltip',
				buttons: [
				'copyHtml5',
				{extend: 'excelHtml5', // Export Columns in Table (Don't Export Acoes) //
                exportOptions: {
                columns: [ 0,1,2,3,4,5,6,7,8,9 ]}},
				'csvHtml5',
				'pdfHtml5'
				],
				"ordering": false,
				"pageLength": 25,
				"scrollX": true,
				"searching": false,
				"lengthMenu": [[25, 50,100,500], [25, 50, 100, 500]],
				"processing": true,
				"serverSide": true,
				ajax: {
					// Url (Ajax)
                    // Type 
                    //data (function)
				},
				columns: [
		            // Data of Columns 
		        ],
			});
		});