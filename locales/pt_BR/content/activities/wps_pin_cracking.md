---
title: Quebra de PIN do WPS
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - Nenhum
skills_required:
  - Sem fio
  - Análise de Tráfego
  - Auditoria de Senhas
skills_trained: []
summary: |
  O WPS foi criado como um complemento ao WPA para facilitar a adição de dispositivos sem precisar digitar senhas seguras, mas essa facilidade de uso significa que um malfeitor pode se passar por um dispositivo e reduzir efetivamente as senhas potencialmente muito difíceis que o WPA permite a um simples PIN numérico de 8 caracteres. Além disso, o sistema WPS permite que um invasor trabalhe nesse PIN em duas partes paralelas, reduzindo ainda mais sua segurança. Isso, assim como o WEP, é um ataque “ao vivo” — você precisa ficar conectado à rede —, mas também como o WEP, é um ataque garantido; sua força bruta no sistema WPS acabará (em 2 a 10 horas) permitindo seu acesso à rede.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
  * Descubra o BSSID do roteador que você quer atacar
  * Use o Wash pra achar roteadores WPS
  * Comece o Reaver: tempo estimado: entre 2 e 10 horas
recommendations: |
  A entrada do PIN WPS deve ser desativada no roteador sem fio ou ativada apenas temporariamente para adicionar novos dispositivos à rede.
organization_size_under: 1000
time_required_minutes: 60
---
