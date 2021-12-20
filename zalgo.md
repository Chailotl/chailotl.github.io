Hello world

<form style='padding: 0 32px;'>
  <textarea id='input' rows='5' autofocus placeholder='Type text here...' oninput='update()'></textarea>
  <div id='sliders'>
    <div class='center'>
      <p>Up amount</p>
      <input id='fuck up' type='range' name='fuck up' value='4' min='0' max='30' oninput='update()'></input>
    </div>
    <div class='center'>
      <p>Middle amount</p>
      <input id='fuck mid' type='range' name='fuck mid' value='2' min='0' max='24' oninput='update()'></input>
    </div>
    <div class='center'>
      <p>Down amount</p>
      <input id='fuck down' type='range' name='fuck down' value='6' min='0' max='30' oninput='update()'></input>
    </div>
    <div class='center'>
      <p>Sparsity</p>
      <input id='fuckiness' type='range' name='fuckiness' value='0.5' min='0' max='1' step='0.01' oninput='update()'></input>
    </div>
    <div class='center'>
      <p>Start point (%)</p>
      <input id='start fuck' type='range' name='start fuck' value='0' min='0' max='1' step='0.01' oninput='update()'></input>
    </div>
    <div class='center'>
      <p>End point (%)</p>
      <input id='end fuck' type='range' name='end fuck' value='0' min='0' max='1' step='0.01' oninput='update()'></input>
    </div>
    <div class='center' style='display: none'>
      <p>Attack</p>
      <input id='power fuck' type='range' name='power fuck' value='1' min='1' max='10' step='0.01' oninput='update()'></input>
    </div>
  </div>
  <textarea id='output' rows='5' readonly placeholder='Summon zalgo here...'></textarea>
</form>
