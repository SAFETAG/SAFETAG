---
title: Acesasndo uma rede filtrada por endereço MAC
approaches:
  - Técnico
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Sem fio
  - Análise de Tráfego
skills_trained: []
summary: |
  Os pontos de acesso sem fio abertos e filtrados por endereço MAC não só estão abertos para qualquer pessoa dentro do alcance se conectar e ouvir, mas também não oferecem proteção para quem está na própria rede, mesmo que não “transmitam” seu nome. Isso pode parecer uma ótima maneira de impedir que usuários não autorizados acessem sua rede sem usar senhas, mas é muito fácil
  contornar.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
  O auditor pode facilmente acessar um ponto de acesso aberto ou filtrado por endereço MAC.

  * Falsificação de endereço MAC
  * Inicie a interface sem fio no modo monitor
  * Identifique os endereços MAC que estão na lista de permissões

  ```bash
  airodump-ng
  ```
  * Altere nosso endereço MAC para um que esteja na lista de permissões

  ```bash
  ifconfig mon0 down
  macchanger -m [ID DO ENDEREÇO MAC IDENTIFICADO] mon0
  ifconfig mon0 up
  ```
recommendations: |
  Recomenda-se a transição para redes WPA com senhas fortes, mesmo para redes de convidados.
organization_size_under: 50
time_required_minutes: 30
---
