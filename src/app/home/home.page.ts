import { Component } from '@angular/core';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private printer: Printer
  ) {}

  public printTest(html: string){
    console.log("mano to tentando velho")
    console.log(this.printer)
    this.printer.print(html, {
        name: 'printingTest'
      })
  }

  public htmlString3: string = `<!DOCTYPE html>
		<div style="font-size:16px; font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;">

      <div class="content">
        <h2>Victor Teste Form</h2>

			<fieldset style='margin-bottom: 1.7em;'>
				<legend><b>teste_empresa_galvao</b></legend>
				<table style="width: 100%"> <tr>
					<td style='width: 50%; vertical-align: top'>
						<b>Cliente: </b>teste_cliente1<br>
						<b>Local: </b>cliente1local1<br>
						<b>Conjunto: </b>Conjunto do cliente 1<br>
						<b>Unidade: </b>sala de visitas <br>
						<b>Local Realizado: </b>cliente1local1 <br>

					</td>
					<td style='vertical-align: top'>
						<b>Equipes: </b>equipe1, Equipe_Galvs<br>
						<b>Usuário: </b>Galvão 3<br>
						<b>Inicio: </b>09/03/22 13:43 <br>
						<b>Fim: </b>09/03/22 14:14 <br>

						<span>

			<span>
				<b>Scoring: </b>0.64 / 1.00 -> 63.64%<br>
			</span>
						</span>


					</td> </tr>
				</table>
			</fieldset>



			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				1 - Texto curto
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - NaoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">vjb</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">vjn</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line"> b </span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">vbb</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844243234.jpeg?alt=media&token=95185a70-21b4-4436-aac1-0a5a160adc1b" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				2 - Texto longo
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - Valor Padrao
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">teste teste , vamos ver se funciona</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - Valor Padrao e obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">teste teste , vamos ver se funciona</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">bnbv</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">vnb</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">j. bb</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844265505.jpeg?alt=media&token=8e303813-f9b8-43ea-a66b-e50bac14c58b" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				3 - Placa
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">VHN-4677</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">GJG-4556</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">HJB-4567</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844302901.jpeg?alt=media&token=4a731934-db2f-46a8-aefc-3407a9ff5df7" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				4 - CPF
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">530.666.666-66</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">089.999.999-99</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">089.985.698-86</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844342230.jpeg?alt=media&token=2a8f9c2e-c438-45a9-ac60-dbd66a93edbf" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				5 - RG
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">456777777</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">Trttgggh</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">Bbbbbnn</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844399946.jpeg?alt=media&token=160a55e7-950d-42bb-8256-a728ae587e8f" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				6 - Telefone
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">(86) 98985-8999</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">(08) 99888-8888</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">(89) 88908-8088</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844425872.jpeg?alt=media&token=e0a4925c-deac-484c-96fd-f12c165f8339" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				7 - Email
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - NaoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">victormdsp@gmail.com</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">victormdsp@gmail.com</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - ComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">victormdsp@gmail.com</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">victormdsp@gmail.com</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">victormdsp@gmail.com</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844456733.jpeg?alt=media&token=349cb21e-fd81-425a-8d18-ca79ab02ac67" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				8 - Cep
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">96989-988</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">89985-880</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">06988-908</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844476075.jpeg?alt=media&token=bb116ac8-ea90-4874-9ada-5cc186350807" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				9 - Data
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">2022-3-9</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComComentario
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">2022-3-9</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">2022-3-9</span>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"gjnh"
			</div>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				10 - Hora
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">13:48</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComComentario
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">13:50</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">13:50</span>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"ghbf"
			</div>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				11 - Assinatura
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844647244?alt=media&token=f34b7557-dc5d-4fc8-b8bb-89bcb85379bb" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComComentarioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844652017?alt=media&token=225c5ae1-f293-4ee8-81ff-30e9284c90fd" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComComentarioObrigatórioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844658736?alt=media&token=69229657-8df2-4ff5-b49c-311ccf897558" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"bkn"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComComentarioEFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844666793?alt=media&token=f17e4ed4-d5ce-4956-ae65-9398a46240e9" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844675501.jpeg?alt=media&token=aaed6c97-fbcb-4592-ab64-f81fee93a330" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - TextoObrigatórioComComentarioObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844686734?alt=media&token=396c5e7f-cd27-4543-a1d1-777f66ef8f00" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"fjn"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(6) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844697657?alt=media&token=49ef1233-21b2-43e5-bdfb-bbbe4aa4d540" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(7) - TextoObrigatórioComFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844703439?alt=media&token=c1f97292-2b74-4ea6-824b-9d5bacadcdd4" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844709725.jpeg?alt=media&token=4da7786a-e022-428e-aee6-205c6396b2a0" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(8) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844730640?alt=media&token=27b816be-26bd-4de9-980a-518ab92f649c" height=250 style='margin-right: .5em; -webkit-transform: rotate(-90deg); -moz-transform: rotate(-90deg); -o-transform: rotate(-90deg); -ms-transform: rotate(-90deg); transform: rotate(-90deg);'>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"bjb"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844721099.jpeg?alt=media&token=f74af83c-04dd-4b04-bac8-fcac9298df8b" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				12 - Seleção Unica
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - NaoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComComentarioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComComentarioObrigatórioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"bk"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - TextoObrigatórioComComentarioEFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844750489.jpeg?alt=media&token=9618d1c3-215f-46a5-af81-6425d59d51d6" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(6) - TextoObrigatórioComComentarioObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"gj"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(7) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(8) - TextoObrigatórioComFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844766863.jpeg?alt=media&token=7d8039a4-b6ab-489c-8b68-1661f05db116" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(9) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"yn"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844777985.jpeg?alt=media&token=2acde71f-aa3e-403b-8c87-1b9ce8fe3b36" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				13 - Seleção Multipla
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><li><b>1</b></li><li><b>2</b></li></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComComentarioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComComentarioObrigatórioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"hn"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComComentarioEFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"hj"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844804540.jpeg?alt=media&token=f1807af2-8379-4390-8600-0a205439fcb2" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - TextoObrigatórioComComentarioObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"vn"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(6) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><li><b>1</b></li><div>›  2</div></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(7) - TextoObrigatórioComFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844948748.jpeg?alt=media&token=53197676-a316-4419-b161-8648034411ea" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(8) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><div>›  1</div><li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"b"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646844982726.jpeg?alt=media&token=856da832-659d-4967-961d-f036fd6d138a" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>





			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				15 - Numero
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - TextoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatórioComComentarioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComComentarioObrigatórioEFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">13</span>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"bb"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComComentarioEFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845217121.jpeg?alt=media&token=1813654a-741b-4a5c-aa6a-607ad4b52963" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - TextoObrigatórioComComentarioObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">0</span>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"b"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(6) - TextoObrigatórioComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(7) - TextoObrigatórioComFotoObrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845265720.jpeg?alt=media&token=2775328b-47f5-4d9e-88c3-2af61cfa34ef" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(8) - TextoObrigatórioMinComComentárioEComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(9) - TextoObrigatórioMaxComComentárioEComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(10) - TextoObrigatórioMinMaxComComentárioEComFoto
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">1</span>
					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(11) - Obrigatório
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>
						<b>Resposta</b>: <span style="white-space: pre-line">13</span>
					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"b"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845246297.jpeg?alt=media&token=a76caf09-3b64-4bba-aa20-7a7afa0c53ab" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				16 - Avaliação
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - NaoObrigatório <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'><li><b>1</b></li>›  2
</span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - TextoObrigatório <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'><li><b>1</b></li>›  2
</span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - TextoObrigatórioComComentarioEFoto <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - TextoObrigatórioComComentarioObrigatórioEFoto <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"vn"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - TextoObrigatórioComComentarioEFotoObrigatório <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845140447.jpeg?alt=media&token=4f5b908f-48c0-4b24-a12b-bf0d420c7967" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(6) - TextoObrigatórioComComentarioObrigatório <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"n"
			</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(7) - TextoObrigatórioComFoto <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(8) - TextoObrigatórioComFotoObrigatório <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845164619.jpeg?alt=media&token=9e523dc3-6f94-4f20-a50a-facadbcd9e26" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(9) - Obrigatório <i style='color: red'> - Não conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'><li><b>1</b></li>›  2
</span>
			</div>

					</div>

			<div>
				<i>>>
					<b style='color: #888;'>Observação:
					</b>
				</i>"bn"
			</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-homol.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646845181774.jpeg?alt=media&token=47eb4af6-9535-48cf-a41a-2d8f8e2e45eb" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(10) - ObrigatórioNConforme <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li></span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(11) - ObrigatórioConforme <i style='color: red'> - Não conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'><li><b>1</b></li>›  2
</span>
			</div>

					</div>

				</div>

      </div>

		</div>`

  public htmlString2: string = `<!DOCTYPE html>
		<div style="font-size:16px; font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;">

      <div class="content">
        <h2>Teste scoring 20220221</h2>

			<fieldset style='margin-bottom: 1.7em;'>
				<legend><b>teste_empresa_galvao</b></legend>
				<table style="width: 100%"> <tr>
					<td style='width: 50%; vertical-align: top'>
						<b>Cliente: </b>teste_cliente1<br>
						<b>Local: </b>cliente1local1<br>
						<b>Conjunto: </b>Conjunto do cliente 1<br>
						<b>Unidade: </b>Unidade QR Code <br>
						<b>Local Realizado: </b>cliente1local1 <br>

					</td>
					<td style='vertical-align: top'>
						<b>Equipes: </b>equipe1, Equipe_Galvs<br>
						<b>Usuário: </b>Galvão 3<br>
						<b>Inicio: </b>25/02/22 18:04 <br>
						<b>Fim: </b>25/02/22 18:05 <br>

						<span>

			<span>
				<b>Scoring: </b>0.50 / 1.00 -> 50.00%<br>
			</span>
						</span>


					</td> </tr>
				</table>
			</fieldset>



			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				1 - Item de Formulário
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - Subitem de Formulário <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
›  2
<li><b>3</b></li>›  4
›  5
</span>
			</div>

					</div>

				<div>
					<i>>> <b style='color: #888;'>Peso: </b></i>2
				</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(2) - Subitem de Formulário <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
›  2
<li><b>3</b></li>›  4
›  5
</span>
			</div>

					</div>

				<div>
					<i>>> <b style='color: #888;'>Peso: </b></i>3
				</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(3) - Subitem de Formulário <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
<li><b>2</b></li>›  3
›  4
›  5
</span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(4) - Subitem de Formulário <i style='color: green'> - Conforme</i>
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: bold'>›  1
›  2
›  3
<li><b>4</b></li>›  5
</span>
			</div>

					</div>

				</div>
        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(5) - Subitem de Formulário
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: normal'>›  1
›  2
›  3
<li><b>Não se aplica</b></li></span>
			</div>

					</div>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				2 - Item de Formulário
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - Subitem de Formulário
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: normal'>›  1
›  2
›  3
<li><b>Não se aplica</b></li></span>
			</div>

					</div>

				<div>
					<i>>> <b style='color: #888;'>Peso: </b></i>100
				</div>

				</div>


			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				3 - Item de Formulário
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - Subitem de Formulário
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
        <span style='white-space: pre-wrap; font-weight: normal'>›  1
›  2
<li><b>Não se aplica</b></li></span>
			</div>

					</div>

				</div>

      </div>

		</div>`

  public htmlString1: string = `<!DOCTYPE html>
		<div style="font-size:16px; font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;">

      <div class="content">
        <h2>Formulário 2</h2>

			<fieldset style='margin-bottom: 1.7em;'>
				<legend><b>teste_empresa_galvao</b></legend>
				<table style="width: 100%"> <tr>
					<td style='width: 50%; vertical-align: top'>
						<b>Cliente: </b>teste_cliente1<br>
						<b>Local: </b>cliente1local1<br>
						<b>Conjunto: </b>Conjunto do cliente 1<br>
						<b>Unidade: </b>Unidade QR Code <br>
						<b>Local Realizado: </b>cliente1local1 <br>
						<span>
				<b>Aprovação: </b>pendente<br>
			</span>
					</td>
					<td style='vertical-align: top'>
						<b>Equipes: </b>equipe1<br>
						<b>Usuário: </b>Galvão 3<br>
						<b>Inicio: </b>04/03/22 16:25 <br>
						<b>Fim: </b>04/03/22 16:26 <br>

						<span>

						</span>


					</td> </tr>
				</table>
			</fieldset>



			<b style='font-size: 1.4em; margin-bottom: .65em; display: inline-block'>
				1 - Item de Formulário 1
			</b>


        <div style='margin-bottom: 1em'>
					<li style='display: inline-block'>
						<b style='font-size: 1.2em'>
							(1) - Seleção1
						</b>
					</li>
					<div style='margin-bottom: .25em; margin-top: .25em'>

			<div style='margin-left: .8em'>
					<span style='white-space: pre-wrap'><li><b>1asdfghjkjhgfdsasdfghjkjhgfdsasdfghjkjhgfdsasdfghjkjhgfdsdfghjkjhgfdsadfghjklkjhgfdsdfghjk</b></li><li><b>2</b></li><li><b>3</b></li><li><b>4</b></li><div>›  5</div><div>›  6</div><div>›  7</div><div>›  8</div><div>›  9</div><div>›  10</div></span>
			</div>

					</div>

      <fieldset>
        <legend><b style='color: #888;'><i>>> Fotos</i></b>
        </legend>
        <div>
					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-prd.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646421945235.jpeg?alt=media&token=a9e97861-01ed-4fd0-b606-37aca6ae77ae" height=250 style='margin-right: .5em'>

					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-prd.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646421964070.jpeg?alt=media&token=88447740-bc2e-4d55-ad3c-db5edfbf015d" height=250 style='margin-right: .5em'>

					<img src="https://firebasestorage.googleapis.com/v0/b/checklist-prd.appspot.com/o/checklisthistorico%2Fgalvao3%2F1646421972414.jpeg?alt=media&token=1a9422db-a904-426c-998c-aeb197455f16" height=250 style='margin-right: .5em'>
				</div>
      </fieldset>

				</div>




      </div>

      </div>`

}
