// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  accordion: {
    multi_expand: true
  }
});
// jsTree kundkort
$(function () {
  // 6 create an instance when the DOM is ready
  $('#jstree').jstree({
    'core': {
      'themes': {
        'variant': 'small'
      }
    },
    'plugins': ['checkbox']
  });
  // 7 bind to events triggered on the tree
  $('#jstree').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  // 8 interact with the tree - either way is OK
  $('button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1');
    $('#jstree').jstree('select_node', 'child_node_1');
    $.jstree.reference('#jstree').select_node('child_node_1');
  });
});
// jsTree Profilsida
$(function () {
  // 6 create an instance when the DOM is ready
  $('#jstree-profil').jstree({
    'core': {
      'themes': {
        'variant': 'small'
      }
    },
    'plugins': ['checkbox']
  });
  // 7 bind to events triggered on the tree
  $('#jstree-profil').on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });
  // 8 interact with the tree - either way is OK
  $('button').on('click', function () {
    $('#jstree-profil').jstree(true).select_node('child_node_1');
    $('#jstree-profil').jstree('select_node', 'child_node_1');
    $.jstree.reference('#jstree-profil').select_node('child_node_1');
  });
});
//Dynatable global settings
$.dynatableSetup({
  inputs: {
    paginationPrev: 'Föregående',
    paginationNext: 'Nästa',
    recordCountText: 'Visar ',
  },
  datasets: {
    perPageDefault: 100,
  }
});
// Individual Dynatables
$('#my-table').dynatable({
  features: {
    search: false,
    perPageSelect: false,
    recordCount: false,
    paginate: false
  }
});
$('#customer-table').dynatable({
  features: {
    perPageSelect: false
  },
});
$('#group-table').dynatable({
  features: {
    perPageSelect: false
  },
  inputs: {
    queries: $('#search-group')
  }
});
// Add class to dynatable rows
$('tbody').each(function(){
  $(this).find('tr').addClass('clickableRow');
});
// Clickable tr
jQuery(document).ready(function($) {
  $(".clickableRow").click(function() {
    window.document.location = $(this).data('url');
  });
});
// Datepicker
$(document).ready(function() {
  $('#profile-period-start').Zebra_DatePicker({
    show_icon: false,
    direction: true,
    offset: [-160, -5],
    pair: $('#profile-period-end')
  });
  $('#profile-period-end').Zebra_DatePicker({
    show_icon: false,
    direction: true,
    offset: [-160, -5]
  });
  $('#top-placement-start').Zebra_DatePicker({
    show_icon: false,
    direction: true,
    offset: [-160, -5],
    pair: $('#top-placement-end')
  });
  $('#top-placement-end').Zebra_DatePicker({
    show_icon: false,
    direction: true,
    offset: [-160, -5]
  });
  $('#latest-answer-date').Zebra_DatePicker({
    show_icon: false,
    direction: 10,
    offset: [-160, -5]
  });
 });