---
title: "Z̥̖̩᷃᷁ͅa͇̭͡l̮᷂̕g̢̻̎͐o̴̢͖̬ Text Corrupter"
description: "Dresses up text with combining characters to make it look <span class='accent'>corrupted</span>.<br>The term <span class='accent'>zalgo</span> is coined from <a href='http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454'>this StackOverflow post</a>."
---

<link rel="stylesheet" href="/assets/css/zalgo.css">

<div class='container tooltip'>
  <button class="button" type='button' onclick='copy()'>Copy to Clipboard</button>
  <span id='tooltip' class='tooltiptext top'>Copied!</span>
</div><br>
<form>
  <textarea id='input' rows='5' autofocus placeholder='Type text here...' oninput='update()'></textarea>
  <div id='sliders'>
    <div class='center'>
      <p>Up amount</p>
      <input id='fuck up' type='range' name='fuck up' value='4' min='0' max='30' oninput='update()'>
    </div>
    <div class='center'>
      <p>Middle amount</p>
      <input id='fuck mid' type='range' name='fuck mid' value='2' min='0' max='24' oninput='update()'>
    </div>
    <div class='center'>
      <p>Down amount</p>
      <input id='fuck down' type='range' name='fuck down' value='6' min='0' max='30' oninput='update()'>
    </div>
    <div class='center'>
      <p>Sparsity</p>
      <input id='fuckiness' type='range' name='fuckiness' value='0.5' min='0' max='1' step='0.01' oninput='update()'>
    </div>
    <div class='center'>
      <p>Start point (%)</p>
      <input id='start fuck' type='range' name='start fuck' value='0' min='0' max='1' step='0.01' oninput='update()'>
    </div>
    <div class='center'>
      <p>End point (%)</p>
      <input id='end fuck' type='range' name='end fuck' value='0' min='0' max='1' step='0.01' oninput='update()'>
    </div>
    <div class='center' style='display: none'>
      <p>Attack</p>
      <input id='power fuck' type='range' name='power fuck' value='1' min='1' max='10' step='0.01' oninput='update()'>
    </div>
  </div>
  <textarea id='output' rows='5' readonly placeholder='Summon zalgo here...'></textarea>
</form>

<script>
var input = document.getElementById('input')
var output = document.getElementById('output')
var fuckUp = document.getElementById('fuck up')
var fuckMid = document.getElementById('fuck mid')
var fuckDown = document.getElementById('fuck down')
var fuckiness = document.getElementById('fuckiness')
var startFuck = document.getElementById('start fuck')
var endFuck = document.getElementById('end fuck')
var powerFuck = document.getElementById('power fuck')
var tooltip = document.getElementById('tooltip')

var topChar = [768, 769, 770, 771, 772, 773, 774, 775, 776,
777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788,
794, 829, 830, 831, 832, 833, 834, 835, 836, 838, 842, 843,
844, 848, 849, 850, 855, 859, 867, 868, 869, 870, 871, 872,
873, 874, 875, 876, 877, 878, 879, 7616, 7617, 7619, 7620,
7621, 7622, 7623, 7624, 7625, 7678]
var middleChar = [789, 795, 801, 802, 807, 808, 820, 821,
822, 823, 824, 856, 860, 861, 862, 863, 864, 865, 866,
65056, 65057, 65058, 65059, 1161]
var bottomChar = [790, 791, 792, 793, 796, 797, 798, 799,
800, 803, 804, 805, 806, 809, 810, 811, 812, 813, 814, 815,
816, 817, 818, 819, 825, 826, 827, 828, 837, 839, 840, 841,
845, 846, 851, 852, 853, 854, 857, 858, 7618, 7626, 7679]
// 847 is invisible, 8432 is too prominent (mid)

var timer

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function randomArray (array) {
  return array[Math.floor((Math.random()*array.length))]
}

function copy () {
  output.select()
  output.setSelectionRange(0, 99999)
  document.execCommand('copy')
  window.getSelection().removeAllRanges();

  tooltip.classList.add('active')
  clearTimeout(timer)
  timer = setTimeout(function(){tooltip.classList.remove('active')}, 1150)
}

function modifier(val, pos) {
  var inLen = input.value.length
  if (pos < inLen * startFuck.value) {
    val = 0
  } else if (pos < inLen * endFuck.value) {
    var len = inLen * endFuck.value - inLen * startFuck.value
    pos -= inLen * startFuck.value
    val *= Math.pow(pos / len, powerFuck.value)
  }
  val -= random(0, fuckiness.value * val)
  if (Math.random() > val) {
    val = 0
  }
  return val
}

function update() {
  if (endFuck.value == 0) { powerFuck.parentElement.style.display = 'none' }
  else { powerFuck.parentElement.style.display = 'inline-flex' }

  var edit = '';
  for (var i = 0; i < input.value.length; ++i) {
    edit += input.value[i]
    var val = modifier(fuckUp.value, i)
    for (var j = 0; j < val; ++j) {
      edit += String.fromCharCode(randomArray(topChar))
    }
    var used = [] // To prevent duplicates
    val = modifier(fuckMid.value, i)
    for (var j = 0; j < val; ++j) {
      var nextChar = randomArray(middleChar)
      while (used.indexOf(nextChar) != -1) {
        nextChar = randomArray(middleChar)
      }
      used.push(nextChar)
      edit += String.fromCharCode(nextChar)
    }
    val = modifier(fuckDown.value, i)
    for (var j = 0; j < val; ++j) {
      edit += String.fromCharCode(randomArray(bottomChar))
    }
  }
  output.value = edit
}

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)
</script>
