---
title: DNSrecon
short_summary: Coletar dados de DNS de um alvo
---

O DNSrecon (disponível desde o lançamento da versão 2017 do Linux Kali ) é um
poderoso script de enumeração DNS que pode ajudar quem faz auditoria a coletar
informações durante a fase de reconhecimento. Esta ferramenta verifica todos os
registros NS em busca de informações de transferências de zona, enumera
registros DNS gerais para um determinado domínio (MX, SOA, NS, A, AAAA, SPF e
TXT). Realiza a enumeração de registros SRV e a expansão TLD (Top Level Domain),
entre outros.

Este exercício irá ajudá-lo a executar alguns dos métodos de enumeração DNS
usando o DNSrecon, e gerar informações que você pode adicionar ao seu banco de
dados para serem usadas em outras formas de teste.

Para executar a enumeração DNS básica no alvo:

root@kali:~# dnsrecon -d <target domain>

Para executar enumeração de transferência de zona DNS:

root@kali:~# dnsrecon -d <target.domain> -t axfr

Para executar pesquisa reversa:

root@kali:~# dnrecon -r <start-IP-to-end-IP>

Para fazer enumeração utilizando método "força bruta" com um dicionário :

root@kali:~# dnsrecon -d <target.domain> -D <namelist> -t brt

Espionagem de Cache

root@kali:~# dnsrecon -t snoop -n Sever -D <Dictionary>

Deslocamento de Zona

root@kali:~# dnsrecon -d <target.domain> -t zonewalk
