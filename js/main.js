function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const texto2 = document.querySelector(".descricao");

     if((valor=="aries") || (valor=="Áries")){
        texto.innerHTML = "Áries &#9800;";
        imagem.setAttribute("src","img/ariesnovo.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }
    
    else if((valor=="touro") || (valor=="Touro")){
        texto.innerHTML = "Touro &#9801;";
        imagem.setAttribute("src","img/touronovo.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. ";
    }

    else if((valor=="gemeos") || (valor=="Gêmeos")){
        texto.innerHTML = "Gêmeos &#9802;";
        imagem.setAttribute("src","img/gemeosnovo.jpg");
        imagem.setAttribute("width","250px");
        texto2.innerHTML = "Saga de Gêmeos é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física. Dado como desaparecido há treze anos, no mangá, ele esteve escondido por todo esse tempo sob a máscara do Grande Mestre, depois de assassiná-lo e tomar seu posto como governante do Santuário. ";
    }

    else if((valor=="cancer") || (valor=="Câncer")){
        texto.innerHTML = "Câncer &#9803";
        imagem.setAttribute("src","img/cancernovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Máscara da Morte de Câncer é, provavelmente, um dos cavaleiros de ouro mais lembrados da Saga do Santuário de Cavaleiros do Zodíaco. Primeiro porque ele tem uma das lutas mais emblemáticas das 12 Casas, enfrentando Shiryu de Dragão. Segundo, porque ele era um cavaleiro de ouro que realmente agia como um vilão.";
    }

    else if((valor=="leao") || (valor=="Leão")){
        texto.innerHTML = "Leão &#9804;";
        imagem.setAttribute("src","img/leaonovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze.";
    }

    else if((valor=="virgem") || (valor=="Virgem")){
        texto.innerHTML = "Virgem &#9805;";
        imagem.setAttribute("src","img/virgemnovo.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    
    else if((valor=="libra") || (valor=="Libra")){
        texto.innerHTML = "Libra &#9806;";
        imagem.setAttribute("src","img/libranovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Athena, por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }

    else if((valor=="escorpiao") || (valor=="Escorpião")){
        texto.innerHTML = "Escorpião &#9807;";
        imagem.setAttribute("src","img/escorpiaonovo.png");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Milo de Escorpião foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne.";
    }

    else if((valor=="sagitario") || (valor=="Sagitário")){
        texto.innerHTML = "Sagitário &#9808;";
        imagem.setAttribute("src","img/sagitarionovo.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aiolos de Sagitário é um dos poucos Cavaleiros do século XX a ser creditado como 'Lendário', título esse mesmo depois de morto, por estar sempre protegendo e auxiliando terceiros a salvar Atena, tanto que todos os outros Cavaleiros independente da patente congratulam Aiolos e pedem a ele que empreste sua força no intuito de protege-la.";
    }
    
    else if((valor=="capricornio") || (valor=="Capricórnio")){
        texto.innerHTML = "Capricórnio &#9809;";
        imagem.setAttribute("src","img/capricornionovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
    }

    else if((valor=="aquario") || (valor=="Aquário")){
        texto.innerHTML = "Aquário &#9810;";
        imagem.setAttribute("src","img/aquarionovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }

    else if((valor=="peixes") || (valor=="Peixes")){
        texto.innerHTML = "Peixes &#9811;";
        imagem.setAttribute("src","img/peixesnovo.jpg");
        imagem.setAttribute("width","400px");
        texto2.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal.";
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado! &#128533;";
        imagem.setAttribute("src","img/signos.jpg");
        imagem.setAttribute("width","550px");
    }
}