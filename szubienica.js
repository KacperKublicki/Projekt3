var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase() //zwiększ litery zmiennej haslo

var dlugosc = haslo.length; //zmienna pobiera informację o liczbie liter w hasle - nie ma tutaj (), bo to jest właściwość, a nie funkcja!!!
var haslo1 = "";

for (i=0; i<dlugosc; i++) //i<długość, a nie <=, bo liczymy od 0
{
	if (haslo.charAt(i)==" ")
		haslo1 = haslo1 + " "; //charAt() sprawdza literę 'i' w wyrazie hasło -> character at - nie można tutaj zastosować tablicy haslo[i], bo tekst to nie tablica w JS 
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start; // sposób wywoływania funkcji przy załadowaniu strony. Należy zwrócić uwagę, że funkcja nie ma znaczników ()

var litery = new Array(35); //tworzę nową tablicę z literami
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8]="F";
litery[9]="G";
litery[10]="H";
litery[11]="I";
litery[12]="J";
litery[13]="K";
litery[14]="L";
litery[15]="Ł";
litery[16]="M";
litery[17]="N";
litery[18]="Ń";
litery[19]="O";
litery[20]="Ó";
litery[21]="P";
litery[22]="Q";
litery[23]="R";
litery[24]="S";
litery[25]="Ś";
litery[26]="T";
litery[27]="U";
litery[28]="V";
litery[29]="W";
litery[30]="X";
litery[31]="Y";
litery[32]="Z";
litery[33]="Ż";
litery[34]="Ź";

function start() //pokazanie literek z prawje strony
{
	var tresc_diva ="";
	
	for (i=0; i<=34; i++) //pętla wykona się 35 razy, bo tyle mamy liter
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')"id='+element+'">'+litery[i]+'</div>'; //apostrofy inaczej niż w HTML bo tam były \'
		if ((i+1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear: both;"></div>' //% to jest reszta z dzielenia przez 7, ale +1 bo liczymy od 0. i+1 jest w nawiasie bo dzielimy to wszystko przez 7
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo(); //w funkcji start wywołana jest funkcja wypisz_haslo()
}

String.prototype.ustawZnak = function (miejsce, znak) // dokładamy funkcję która znajduje się w klasie String.prototype po to aby można było później użyć np. napis.ustawZnak(0, "B")
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1); //substr - wyjęty fragment łańcucha 
}
function sprawdz(nr)
{
	var trafiona = false;
	
	
	for (i=0; i<dlugosc; i++) //dlugosc jest TYLKO mniejsza od dlugosci znaków, bo znaki z naszego hasła są numerowane od 1
	{
		if (haslo.charAt(i)== litery[nr]); //jeśli zajdzie to znaczy, że na danej pozycji odnaleziono literkę
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
		if(trafiona==true)
		{
			var element = "lit" + nr;
			document.getElementById(element).style.background="#003300";
			wypisz_haslo();
		}
		else
		{
			
		}
	}

//alert(nr);funkcja spowoduje wyświetlenie alerta, a w tym okienku dostaniemy wartość numeru od 0 do 34.

//charAt() służy tylko do odczytu - nie do wyświetlania