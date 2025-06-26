import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Scale, 
  Shield, 
  DollarSign, 
  AlertTriangle, 
  Building, 
  FileText, 
  Users, 
  CheckCircle,
  XCircle,
  BarChart3,
  BookOpen,
  Gavel,
  ExternalLink
} from 'lucide-react'
import './App.css'

// Importando as imagens
import auditorImage from './assets/auditor_tributario.png'
import fiscalImage from './assets/fiscal_municipal.png'
import graficoImage from './assets/grafico_comparativo_melhorado.png'
import competenciasImage from './assets/fundamento_constitucional_sem_acentos.png'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Prefeitura de Porto Velho</h1>
                <p className="text-sm text-gray-600">Cartilha Educativa</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection('intro')}>Início</Button>
              <Button variant="ghost" onClick={() => scrollToSection('diferencas')}>Diferenças</Button>
              <Button variant="ghost" onClick={() => scrollToSection('competencias')}>Competências</Button>
              <Button variant="ghost" onClick={() => scrollToSection('dados')}>Dados</Button>
              <Button variant="ghost" onClick={() => scrollToSection('legislacao')}>Legislação</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="intro" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Auditores do Tesouro vs Fiscais Municipais
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Entenda as diferenças e competências constitucionais
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => scrollToSection('diferencas')}>
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Diferenças
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => scrollToSection('dados')}>
                <BarChart3 className="mr-2 h-5 w-5" />
                Ver Dados
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamento Constitucional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fundamento Constitucional</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Constituição Federal de 1988 estabelece uma separação clara entre competência tributária e poder de polícia
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img src={competenciasImage} alt="Competências Constitucionais" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Principais Diferenças */}
      <section id="diferencas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais Diferenças</h2>
            <p className="text-lg text-gray-600">Competências distintas e complementares</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Auditor Tributário */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <div className="flex items-center space-x-3">
                  <Scale className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl">Auditor do Tesouro</CardTitle>
                    <CardDescription className="text-blue-100">Autoridade Tributária Municipal</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <img src={auditorImage} alt="Auditor do Tesouro" className="w-full rounded-lg mb-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Competências Exclusivas
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><DollarSign className="h-4 w-4 mr-2 text-blue-600" />Lançamento de tributos (ISS, IPTU, ITBI)</li>
                      <li className="flex items-center"><FileText className="h-4 w-4 mr-2 text-blue-600" />Constituição do crédito tributário</li>
                      <li className="flex items-center"><BarChart3 className="h-4 w-4 mr-2 text-blue-600" />Gestão da receita tributária</li>
                      <li className="flex items-center"><Gavel className="h-4 w-4 mr-2 text-blue-600" />Taxa de licenciamento</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Responsabilidades</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">R$ 568M</div>
                        <div className="text-gray-600">Receitas Tributárias</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">99,1%</div>
                        <div className="text-gray-600">das Receitas</div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm font-semibold text-green-700 mb-1">VAF-ICMS</div>
                      <div className="text-xs text-green-600">R$ 92M dependem da fiscalização tributária</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fiscal Municipal */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-orange-600 text-white">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl">Fiscal Municipal</CardTitle>
                    <CardDescription className="text-orange-100">Poder de Polícia Administrativo</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <img src={fiscalImage} alt="Fiscal Municipal" className="w-full rounded-lg mb-6" />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Competências Específicas
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><FileText className="h-4 w-4 mr-2 text-orange-600" />Autos de Infração de poder de polícia</li>
                      <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-orange-600" />Fiscalização de policiamento urbano</li>
                      <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-orange-600" />Exercício do poder de polícia</li>
                      <li className="flex items-center"><Building className="h-4 w-4 mr-2 text-orange-600" />Controle de atividades comerciais</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Tipos de Autos de Infração</h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <Badge variant="outline" className="justify-start">Obras</Badge>
                      <Badge variant="outline" className="justify-start">Trânsito</Badge>
                      <Badge variant="outline" className="justify-start">Meio Ambiente</Badge>
                      <Badge variant="outline" className="justify-start">Localização e Funcionamento</Badge>
                      <Badge variant="outline" className="justify-start">Posturas</Badge>
                      <Badge variant="outline" className="justify-start">Vigilância Sanitária</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competências Detalhadas */}
      <section id="competencias" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competências Detalhadas</h2>
            <p className="text-lg text-gray-600">Análise comparativa das responsabilidades</p>
          </div>

          <Tabs defaultValue="auditores" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="auditores">Auditores do Tesouro</TabsTrigger>
              <TabsTrigger value="fiscais">Fiscais Municipais</TabsTrigger>
            </TabsList>
            
            <TabsContent value="auditores" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 mr-2 text-blue-600" />
                    Auditores Tributários
                  </CardTitle>
                  <CardDescription>Competência constitucional exclusiva para arrecadação de tributos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">✅ Competências Exclusivas</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Lançamento tributário técnico</li>
                        <li>• Constituição do crédito tributário</li>
                        <li>• Cobrança de impostos e taxas</li>
                        <li>• Fiscalização tributária</li>
                        <li>• Gestão da receita tributária</li>
                        <li>• Aplicação do Código Tributário</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Base Legal</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Art. 156 da Constituição Federal</li>
                        <li>• Art. 9º do Código Tributário Municipal</li>
                        <li>• Código Tributário Nacional</li>
                        <li>• Lei Complementar nº 878/2021</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">⚠️ Taxa de Licenciamento</h4>
                    <p className="text-sm text-blue-700">
                      A Taxa de Licenciamento é um TRIBUTO, portanto sua gestão e lançamento são de competência 
                      exclusiva da Administração Tributária, mesmo que a análise técnica seja feita por outros órgãos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fiscais" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-orange-600" />
                    Fiscais Municipais
                  </CardTitle>
                  <CardDescription>Poder de polícia administrativo em diversas áreas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-700">✅ Competências Específicas</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Aplicação de Autos de Infração</li>
                        <li>• Fiscalização de estabelecimentos</li>
                        <li>• Verificação de licenças</li>
                        <li>• Controle de atividades comerciais</li>
                        <li>• Fiscalização ambiental</li>
                        <li>• Controle sanitário</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Base Legal</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Art. 78 do Código Tributário Nacional</li>
                        <li>• Art. 4º do Código de Posturas</li>
                        <li>• Lei Complementar nº 873/2021</li>
                        <li>• Códigos específicos por área</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-800">❌ Limitações</h4>
                    <p className="text-sm text-orange-700">
                      Os fiscais municipais NÃO podem lançar ou cobrar tributos. Seus Autos de Infração têm caráter 
                      administrativo, educativo e preventivo, não tributário.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dados Orçamentários */}
      <section id="dados" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparativo de Receitas</h2>
            <p className="text-lg text-gray-600">Dados orçamentários que demonstram a importância de cada categoria</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img src={graficoImage} alt="Gráfico Comparativo" className="w-full rounded-lg shadow-lg mb-8" />
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">R$ 568M</div>
                  <div className="text-gray-600 mb-2">Receitas Tributárias</div>
                  <Progress value={99.1} className="h-2" />
                  <div className="text-sm text-gray-500 mt-1">99,1% do total</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">R$ 5,2M</div>
                  <div className="text-gray-600 mb-2">Autos de Infração</div>
                  <Progress value={0.9} className="h-2" />
                  <div className="text-sm text-gray-500 mt-1">0,9% do total</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">109:1</div>
                  <div className="text-gray-600 mb-2">Proporção</div>
                  <div className="text-sm text-gray-500">Para cada R$ 1 em autos, R$ 109 em tributos</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detalhamento das Receitas (Excluindo Dívida Ativa)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Tipo de Receita</th>
                        <th className="text-right p-2">Valor Estimado</th>
                        <th className="text-right p-2">Percentual</th>
                        <th className="text-left p-2">Responsável</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-blue-50">
                        <td className="p-2 font-semibold" colSpan="4">RECEITAS TRIBUTÁRIAS</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">ISS (ISSQN)</td>
                        <td className="p-2 text-right">R$ 258.196.651,00</td>
                        <td className="p-2 text-right">45,4%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">IPTU</td>
                        <td className="p-2 text-right">R$ 40.976.191,00</td>
                        <td className="p-2 text-right">7,2%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">ITBI</td>
                        <td className="p-2 text-right">R$ 24.882.600,00</td>
                        <td className="p-2 text-right">4,4%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Taxa Lixo</td>
                        <td className="p-2 text-right">R$ 35.760.432,00</td>
                        <td className="p-2 text-right">6,3%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">COSIP</td>
                        <td className="p-2 text-right">R$ 76.370.558,00</td>
                        <td className="p-2 text-right">13,4%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b bg-green-50">
                        <td className="p-2 font-semibold">VAF-ICMS</td>
                        <td className="p-2 text-right font-semibold">R$ 92.070.964,00</td>
                        <td className="p-2 text-right font-semibold">16,2%</td>
                        <td className="p-2 font-semibold">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Demais Taxas</td>
                        <td className="p-2 text-right">R$ 40.240.628,00</td>
                        <td className="p-2 text-right">7,1%</td>
                        <td className="p-2">Auditores do Tesouro</td>
                      </tr>
                      <tr className="border-b bg-orange-50">
                        <td className="p-2 font-semibold" colSpan="4">AUTOS DE INFRAÇÃO DE PODER DE POLÍCIA</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Multas Legislação de Trânsito</td>
                        <td className="p-2 text-right">R$ 4.494.150</td>
                        <td className="p-2 text-right">86,0%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Obras</td>
                        <td className="p-2 text-right">R$ 335.160</td>
                        <td className="p-2 text-right">6,4%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Localização</td>
                        <td className="p-2 text-right">R$ 192.420</td>
                        <td className="p-2 text-right">3,7%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Posturas</td>
                        <td className="p-2 text-right">R$ 82.640</td>
                        <td className="p-2 text-right">1,6%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Trânsito</td>
                        <td className="p-2 text-right">R$ 54.950</td>
                        <td className="p-2 text-right">1,1%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Vigilância</td>
                        <td className="p-2 text-right">R$ 42.310</td>
                        <td className="p-2 text-right">0,8%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Auto de Infração - Meio Ambiente</td>
                        <td className="p-2 text-right">R$ 25.210</td>
                        <td className="p-2 text-right">0,5%</td>
                        <td className="p-2">Fiscais Municipais</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legislação */}
      <section id="legislacao" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legislação de Referência</h2>
            <p className="text-lg text-gray-600">Códigos municipais específicos que fundamentam as competências</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Código de Obras</CardTitle>
                <CardDescription>Lei Complementar nº 560/2014</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Regulamenta os Autos de Infração de obras e edificações no município.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2014/441/lei-comp-n-560.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar Código
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Código Sanitário</CardTitle>
                <CardDescription>Lei nº 1.562/2003</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Define os Autos de Infração de vigilância sanitária e epidemiológica.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2003/1605/lei_ord_n_1562.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar Código
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Código Ambiental</CardTitle>
                <CardDescription>Lei Complementar nº 138/2001</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Estabelece os Autos de Infração de meio ambiente municipal.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2001/139/leicomp.n138de28.12.01codigomunicipaldemeioambiental.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar Código
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Código de Posturas</CardTitle>
                <CardDescription>Lei Complementar nº 873/2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Regulamenta os Autos de Infração de posturas e localização.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2021/14723/lei_comp._no_873_de_16.12.2021_mens._83-2021.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar Código
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Código Tributário</CardTitle>
                <CardDescription>Código Tributário Municipal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Define as competências dos auditores tributários municipais.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2021/14805/codigo_tributario_compilado_-_ate_2023_compressed_2.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar Código
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">PLOA 2025</CardTitle>
                <CardDescription>Projeto de Lei Orçamentária</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Dados orçamentários utilizados na análise comparativa.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://www.portovelho.ro.gov.br/uploads/arquivos/2024/10/69528/1727964434documento-completo-ploa-2025-assinado-e-pmpv-portal.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Acessar PLOA
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusão</h2>
            <div className="text-xl mb-8 opacity-90">
              A separação de competências entre auditores tributários e fiscais municipais é fundamental para:
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Segurança Jurídica</h3>
                <p className="text-sm opacity-90">Garantia da validade dos atos administrativos</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Eficiência Administrativa</h3>
                <p className="text-sm opacity-90">Especialização e otimização de processos</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Scale className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cumprimento Constitucional</h3>
                <p className="text-sm opacity-90">Respeito aos mandamentos legais</p>
              </div>
            </div>
            <div className="bg-white/20 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">🎯 MENSAGENS PRINCIPAIS</h3>
              <div className="space-y-2">
                <p className="text-lg">
                  ✅ SOMENTE A AUTORIDADE TRIBUTÁRIA TEM PODER CONSTITUCIONAL E LEGAL PARA ARRECADAR TRIBUTOS
                </p>
                <p className="text-lg">
                  ✅ OS FISCAIS MUNICIPAIS EXERCEM PODER DE POLÍCIA ATRAVÉS DE AUTOS DE INFRAÇÃO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-semibold">Prefeitura Municipal de Porto Velho</h3>
            <p className="text-gray-400">Secretaria Municipal de Fazenda - SEMFAZ</p>
            <p className="text-gray-400">Administração Tributária Municipal</p>
          </div>
          <Separator className="my-4" />
          <p className="text-sm text-gray-400">
            Esta cartilha foi elaborada com base na legislação vigente e tem caráter meramente informativo.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Desenvolvido por Manus AI - Junho de 2025
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

