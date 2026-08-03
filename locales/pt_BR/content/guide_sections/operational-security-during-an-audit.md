---
title: Segurança Operaciona Durante uma Auditoria
---
Esteja ciente de que os grupos locais podem não ser capazes de avaliar com
precisão a segurança de suas comunicações com você. Às vezes, eles subestimam a
probabilidade de risco; outras vezes, podem superestimar o risco de forma
exagerada. De qualquer forma, você precisa lidar com essa questão com cuidado e
respeito, adotando uma abordagem de “não causar danos” que respeite as
necessidades, o contexto e as experiências relatadas pelo seu contato local e
pelos potenciais participantes. de treinamento.” - *Avaliação de Necessidades:
Nível Superior* [^event_planning_input]

### Resumo

A segurança operacional refere-se às medidas de segurança tomadas por você para
proteger a organização auditada e a si mesma durante todo o processo de
auditoria. Abaixo estão algumas diretrizes básicas de segurança operacional para
uma auditoria SAFETAG. As diretrizes de segurança operacional específicas para
cada atividade estão contidas em cada atividade.

### Propósito

Uma auditoria revela uma série de informações confidenciais sobre uma
organização. Para algumas populações em risco, o simples fato de passar por uma
auditoria de segurança digital pode aumentar a probabilidade de serem atacadas
ativamente por um adversário. A base do processo SAFETAG é o objetivo de
aumentar a segurança da organização anfitriã, de sua equipe e da pessoa
auditora. É vital que uma pessoa auditora avalie o risco possível que uma
auditoria pode acarretar para a organização ou para a própria auditora em
relação aos possíveis benefícios da auditoria. Em outras palavras, pode haver
circunstâncias em que a realização de uma auditoria possa introduzir níveis de
risco para a organização ou para o auditor que exijam a decisão de não
prosseguir.

### Abordagens

**Segurança do armazenamento de dados e de dados em trânsito**

* Mantenha TODOS os dados relacionados à avaliação protegidos e
  compartimentados, desde notas de entrevistas e pesquisas até resultados de
  auditorias e relatórios. Os auditores devem observar onde as ferramentas (como
  OpenVAS ou recon-ng) armazenam seus dados internos. Na prática, em situações
  comuns, os volumes LUKS ou VeraCrypt são bem úteis, seguros e portáteis. O
  auditor deve modificar sua abordagem de armazenamento de dados com base nas
  informações de ameaças obtidas em sua pesquisa contextual.
* Considere quais opções de armazenamento seguro a organização precisará ter
  para armazenar o relatório final e os documentos com as conclusões.
* Considere se os dados brutos podem estar em risco durante o transporte após a
  auditoria e planeje medidas de mitigação antes da viagem (por exemplo,
  finalizar o relatório no local ou fazer o upload para um servidor remoto
  seguro e excluir todos os dados localmente de forma segura).
* Consulte o acordo estabelecido com a organização.

**Segurança de comunicação**

* Realize todas as comunicações com o cliente através de canais minimamente
  seguros, nos quais a comunicação seja criptografada em trânsito em todos os
  momentos. Considere os riscos para a organização e para a(s) pessoa(s)
  auditora(s) se a organização estiver ativamente comprometida.
* Níveis mais elevados de segurança com garantias de ponta a ponta (como Signal,
  Wire, PGP ou Veracrypt) devem ser usados para transferências de arquivos e
  documentos.
* Pode ser necessário treinamento e suporte para garantir que a organização seja
  capaz de receber essas comunicações de forma confiável e segura.

**Exclusão de Dados**

* Quando os dados da avaliação tiverem que ser destruídos (pela auditora ou pela
  organização), certifique-se de que sejam seguidos processos seguros de
  exclusão de dados.

### Recursos

* *Padrão*: [Guia Técnico para Testes e Avaliação de Segurança da Informação
  NIST SP 800-115 - Seção
  7.4](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-115.pdf)
  (_NIST SP 800-115, Technical Guide to Information Security Testing and
  Assessment_, no site da NIST)
* *Padrão*: [Padrões de segurança de dados para testes de
  penetração](http://www.pentest-standard.org/index.php/Pre-engagement#PGP_and_Other_Alternatives)
  (Pentest Standards for data security, em Pentest Standards)
* *Guia*: [Defesa Pessoal contra Vigilância](https://ssd.eff.org/)
  (_Surveillance Self Defense_, guias para comunicação segura via WhatsApp,
  Signal, PGP, e OTR em diferentes plataformas, em EFF)
* *Guia*: [Security in a box: Proteja suas informações e arquivos
  sensíveis](https://securityinabox.org/en/guide/secure-file-storage/)
  (_Security in a box: Secure File Storage_, em Security in a Box)
