---
title: Avaliação de segurança de VoIP
approaches:
  - Pesquisa
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Pesquisa
  - Varredura de Rede
skills_trained: []
summary: |
  As tecnologias VoIP são muito usadas hoje em dia, porque oferecem uma forma alternativa e flexível de comunicação. Com várias vantagens, como isenção de tarifas, tronco (_trunking_) unificado de voz e dados e serviços de correio de voz e fax acessíveis a todos, os serviços VoIP se tornaram um dos serviços de comunicação mais usados atualmente. No entanto, com o aumento dos ataques cibernéticos e a realidade de que qualquer dispositivo conectado à Internet pode ser um risco potencial para ataques, o VoIP tem sido um dos alvos favoritos de spam, interrupções, phishing de voz, hacking e perda de privacidade.
overview: |
  * Descubra (através de varreduras de rede, visitas ao local e pesquisas/entrevistas) se a organização está usando telefones VOIP (hardware e/ou clientes de telefone “soft”)
  * Dê uma olhada em qualquer hardware de rede para ver o nível atual de patch e possíveis vulnerabilidades
  * Pesquise o provedor de VOIP para avaliar sua segurança (por exemplo, mesmo em chamadas VOIP para VOIP, muitos provedores não criptografam o tráfego pela rede)
materials_needed: |
  * Acesso à rede com VOIP ativo
  * Recursos de varredura de rede.
considerations: ''
walk_through: |
  Veja as referências sobre VOIP.O Wireshark tem filtros VOIP e ferramentas de reconstrução de chamadas:https://wiki.wireshark.org/VoIP_calls (teste isso com uma captura de amostra:https://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=view&target=rtp_example.raw.gz)
recommendations: ''
organization_size_under: 100
time_required_minutes: 30
---
