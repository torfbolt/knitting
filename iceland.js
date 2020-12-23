$(document).ready(function(){
  $('table.stripes input').change(update);

  $(".add-row").click(function(){
    var markup = '<tr>' +
                 '<td class="rpt"><input step="1" type="number" value="0"></td>' +
                 '<td class="num"><input step="1" type="number" value="0"></td>' +
                 '<td class="sti"></td><td class="inc"></td>' +
                 '<td class="frac"></td><td class="rule"></td></tr>';
    $("table.stripes tbody tr:last").prev().after(markup);
    $('table.stripes input').change(update);
    $(".delete-row").prop("disabled", $('table.stripes tr').length <= 3);
    update();
  });

  $(".delete-row").click(function(){
    $("table.stripes tbody tr:last").prev().remove();
    $(".delete-row").prop("disabled", $('table.stripes tr').length <= 3);
    update();
  });
  
  update();
});

function update() {
  var s = $('#sti_start').val()
  for (i = 2; i < $('table.stripes tr').length; i++) {
    var tr = $('table.stripes tr').eq(i)
    if (i == $('table.stripes tr').length - 1) {
      var sti = $('#sti_end').val();
    } else {
      var sti = tr.find('td.rpt input').val() * tr.find('td.num input').val();
      if (sti == 0) continue;
      tr.find('td.sti').html(sti);
    }
    var d = sti - s;
    tr.find('td.inc').html(d);
    var m = Math.abs(d / gcd(d, s));
    var n = Math.abs(s / gcd(d, s));
    tr.find('td.frac').html(m + "/" + n);
    var rule = '<span>';
    for (x = 1; x <= m; x++) {
        rule = rule + ' ' + (Math.round(n * x / m) - Math.round(n * (x - 1) / m));
        if (x % 20 == 0)
            rule = rule + ' </span><br><span>';
        else if (x % 5 == 0)
            rule = rule + '</span><span>';
    }
    rule = rule + '</span>';
    tr.find('td.rule').html(rule);
    s = sti;
  }
}

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

