---
title: Registros MX
short_summary: Identifique detalhes dos serviços de e-mail da organização
---

Os registros MX, ou Mail Exchange, devem ser públicos para qualquer domínio onde
você deseja receber e-mails. Esses registros ainda podem revelar informações
confidenciais sobre a configuração de hospedagem e o software de escritório em
uso por uma organização por meio de varreduras adicionais (consulte [Varredura
de vulnerabilidades](https://safetag.org/activities/vulnerability_scanning), em
SAFETAG). Os registros MX podem revelar servidores de e-mail vulneráveis ou
informações sobre outros serviços hospedados internamente. A menos que outras
avaliações revelem vulnerabilidades específicas nos serviços de e-mail usados,
não há nenhuma ação específica a ser tomada. Se uma organização hospeda seus
próprios e-mails, pode ser aconselhável sugerir a terceirização, se os fundos
permitirem. Embora o e-mail hospedado pela própria organização ofereça mais
controle e potencialmente mais segurança, gerenciar a segurança do servidor é
uma tarefa complexa. Outros serviços de e-mail podem fornecer algum nível de
proteção, como uma primeira verificação de spam e vírus, e reduzindo
(ligeiramente) a visibilidade do servidor de e-mail da organização.

```
root@bt:~# host -t mx example.com
example.com mail is handled by 21 mail.example.com
```

```root@bt:~# host -t mx example.comexample.com mail is handled by 21
mail.example.com```

```
root@bt:~# host mail.example.com
mail.example.com has address 256.0.0.3
```

Determine o endereço IP do servidor de e-mail:
