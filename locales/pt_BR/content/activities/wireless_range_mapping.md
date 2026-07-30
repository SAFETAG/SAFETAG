---
title: Mapeamento do alcance sem fio
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - Nenhum
skills_required:
  - Sem fio
skills_trained: []
summary: |
  Esse componente permite que a auditora mostre a “visibilidade” da rede sem fio de uma organização para ver até onde ela vai além da área controlada. As redes sem fio costumam ser consideradas tão confiáveis quanto as redes com fio dos escritórios, que elas substituíram em grande parte, mas têm diferenças importantes. As redes sem fio costumam ser “visíveis” de fora do escritório — de espaços comuns ou até mesmo da rua. Sem acesso adicional, isso revela muitas informações sobre o tamanho da organização e o tipo de dispositivos conectados à sua rede.
overview: |
  Esse componente envolve a varredura sem fio e o mapeamento de sinais sem fio. É útil para organizações com escritórios em espaços/prédios/complexos de apartamentos compartilhados ou perto de lugares onde alguém poderia facilmente “ouvir” o tráfego da rede. Junto com o exercício de monitoramento do tráfego sem fio aberto, também pode identificar dispositivos que usam essa rede. É legal fazer isso junto com o mapeamento do escritório para ter uma visão mais completa dos ativos de informação da organização.
  * Identifique e verifique a(s) rede(s) pertencente(s) à organização
  * Crie um mapa ou fotos indicando o alcance de cada ponto de acesso sem fio relevante.
materials_needed: |
  * Um dispositivo sem fio portátil (como um celular/tablet Android) é útil para mapear os limites da rede sem levantar suspeitas. Alguns aplicativos como [Wifi analyzer](https://play.google.com/store/apps/details?id=cz.webprovider.wifianalyzer)e [Wifi Mapper](https://play.google.com/store/apps/details?id=com.osiris_mobile.wifimapper&hl=en)podem ajudar.
considerations: |
  * Mesmo que esse exercício só envolva dados transmitidos, dá uma olhada nas leis locais que podem se aplicar a esse processo antes de fazer isso.
  * Pensa em como isso pode parecer para outras pessoas enquanto você está verificando uma rede, principalmente de fora do escritório.
walk_through: |
  Mapeie o alcance da rede sem fio da organização fora do espaço do escritório, usando o wifite ou outras ferramentas para rastrear a intensidade da rede.Vários aplicativos e ferramentas podem ajudar nesse trabalho sem precisar usar ferramentas profissionais de “levantamento de locais Wi-Fi”. Se o exercício de mapeamento do escritório já tiver sido feito, esse mapa pode servir como ponto de partida para expandir o mapa para fora do escritório. Se usar uma ferramenta ou aplicativo de terceiros, certifique-se de que o aplicativo não esteja compartilhando dados confidenciais. Usar monitores simples de intensidade do sinal em combinação com notas de localização é mais do que suficiente. Em sistemas Linux, é possível usar wavemon, kismet, wifite e até mesmo as ferramentas de linha de comando networkmanager para rastrear redes visíveis e suas intensidades [conforme descrito no StackExchange](https://askubuntu.com/questions/237777/is-there-a-tool-like-wifi-analyzer-for-ubuntu):```watch "nmcli -f "CHAN,BARS,SIGNAL,SSID" d wifi list ifname wlx10feed21ae1d |sort -n"```
  * https://www.netspotapp.com/ (OSX, Windows, grátis para usos não comerciais)
  * http://wifianalyzer.mobi, http://wifiheat.com/ (Android)
recommendations: |
  Dependendo do layout do escritório, mudar o ponto de acesso sem fio pode ajudar a reduzir a distância que a rede é transmitida fora do espaço do escritório, e trocar os dispositivos que não se movem para melhorar isso sem perder a funcionalidade.Veja também as recomendações de [Monitoramento do tráfego sem fio aberto](https://safetag.org/pt_BR/activities/monitor_open_wireless_traffic) e as recomendações de segurança de [Acesso à rede](https://safetag.org/pt_BR/activities/network_access).
organization_size_under: 500
time_required_minutes: 30
---
