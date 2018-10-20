window.addEventListener('load', () => {

  const appContainer = $('#appContainer');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const splashTemplate = Handlebars.compile($('#splash-template').html());
  const chartsTemplate = Handlebars.compile($('#charts-template').html());
  const chartEditorTemplate = Handlebars.compile($('#editor-template').html());

  let html = splashTemplate();
  appContainer.html(html);

  // Set up interactivity
  $('#addChartBtn').on('click', (event) => {
    addNewChart('newChart', 31598139);
  });

  $('#sidenavBtn').on('click', (event) => {
    $('#mySideNav').width('33%');
  });

  $('#mySideNav').on('click', (event) => {
    $('#mySideNav').width('0');
  });

  // Set up routing
  page('/', () => {
    let html = splashTemplate();
    appContainer.html(html);
  });
  page('/charts', () => {
    let html = chartsTemplate();
    appContainer.html(html);
  });
  page('*', () => {
    //let json = { faultyPath: '12345' };
    //let html = errorTemplate(json);
    //appContainer.html(html);
    console.log('404');
  });
//  page('/charts/:id', function(ctx){
//    let chartId = ctx.params.id;
//    console.log(chartId);
//    //let html = chartEditorTemplate();
//    //appContainer.html(html);
//  });
  page.start();

/*
  // Router Declaration
  const router = new Router({
    mode: 'history',
    page404: (path) => {
      let html = errorTemplate({
        color: 'yellow',
        title: 'Error 404 - Page NOT Found!',
        message: `The path '/${path}' does not exist on this site`,
      });
      applicationContainer.html(html);
    },
  });

  router.add('/', () => {
    title.html('ROOT PAGE');
    let html = splashTemplate();
    el.html(html);
  });

  router.add('/charts', () => {
    title.html('CHARTS PAGE');
    let html = chartsTemplate();
    el.html(html);
  });
/*

/*


  const title = $('#title');



  router.add('/charts/:id', () => {
    console.log('here');
    let json = {id: "12345"};
    let html = chartEditorTemplate(json);
    console.log(html);
    el.html(html);
  });

  router.navigateTo(window.location.pathname);

  $('#mySideNav a').on('click', (event) => {
    const target = $(event.target);
    //console.log(target.dataset.chartId);
    // Block browser page load
    event.preventDefault();
    const href = target.attr('href');
    const path = href.substr(href.lastIndexOf('/'));
    router.navigateTo(path);
  });


  $('#chartsList a').on('click', (eventQ) => {
    let chartId = event.target.dataset.chartid;
    let path = window.location.pathname + '/' + chartId;
    router.navigateTo(path);
  });

  */

});

function addNewChart(chartName, chartId){
  let element = `<a data-chartid="${chartId}">${chartName}</a>`;
  $('#chartsList').append(element);
}
