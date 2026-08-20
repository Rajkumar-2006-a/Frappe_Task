// frappe.pages['temperature-monitor'].on_page_load = function(wrapper) {
//     let page = frappe.ui.make_app_page({
//         parent: wrapper,
//         title: 'Temperature Monitor',
//         single_column: true
//     });

    // $(page.body).html(`
    //     <button class="btn btn-primary" id="send-temperature">
    //         Send Temperature
    //     </button>

    //     <div id="temperature-chart" style="margin-top: 20px;"></div>
    // `);

    // const data = {
    //     labels: ["1", "2", "3"],
    //     datasets: [
    //         {
    //             name: "Temperature",
    //             values: [25, 30, 28]
    //         }
    //     ]
    // };

    // let chart = new frappe.ui.RealtimeChart(
    //     "#temperature-chart",
    //     "temperature_event",
    //     8,
    //     {
    //         title: "My Realtime Chart",
    //         data: data,
    //         type: "bar",
    //         height: 250,
    //         colors: ["#7cd6fd"]
    //     }
    // );
    // chart.start_updating();

    // function sendTemperature() {
    //     frappe.call({
    //         method: "library.api.send_temperature",
    //         callback: function(r) {
    //             console.log("Temperature sent:", r.message);
    //         },
    //         error: function(err) {
    //             console.error("Failed to send temperature:", err);
    //         }
    //     });
    // }
//   $(page.body).html(`<div id="scan"></div>`);

// let scanner = new frappe.ui.Scanner({
//     container: $(page.body).find("#scan"),
//     dialog: false,
//     multiple: false,
//     on_scan(data) {
//         console.log(data.decodedText);
//     }
// });
// };


frappe.pages['temperature-monitor'].on_page_load = function(wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Temperature Monitor',
        single_column: true
    });

    $(page.body).html(`
        <button class="btn btn-primary" id="open-scanner">Scan Code</button>
    `);

    $(page.body).on("click", "#open-scanner", function () {
        new frappe.ui.Scanner({
            dialog: true,
            multiple: false,
            on_scan(data) {
                console.log("Scanned value:", data.decodedText);
            }
        });
    });
};