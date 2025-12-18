import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { 
  Palette, 
  Type, 
  Layout, 
  Component, 
  Code, 
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export function DesignSystem() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary text-primary-foreground rounded-lg">
              <Component className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Shared UI Design System</h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive component library built with shadcn/ui, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-sm">
            Version 1.0.0
          </Badge>
        </div>

        <Separator />

        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>Get started with Shared UI in your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Installation</Label>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <div className="text-muted-foreground mb-2"># npm</div>
                <div>npm install git+https://github.com/your-username/shared-ui.git</div>
                <div className="text-muted-foreground mt-4 mb-2"># yarn</div>
                <div>yarn add git+https://github.com/your-username/shared-ui.git</div>
                <div className="text-muted-foreground mt-4 mb-2"># pnpm</div>
                <div>pnpm add git+https://github.com/your-username/shared-ui.git</div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Usage</Label>
              <div className="bg-muted p-4 rounded-md font-mono text-sm">
                <div className="text-muted-foreground">import {'{'} Button, Card {'}'} from '@shared-ui'</div>
                <div className="mt-2">
                  <div className="text-muted-foreground">{'<'}</div>
                  <div className="ml-4">{'<'}Button{'>'}Click me{'</'}Button{'>'}</div>
                  <div className="text-muted-foreground">{'</'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design Tokens */}
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Usage
            </TabsTrigger>
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="spacing" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Spacing
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center gap-2">
              <Component className="h-4 w-4" />
              Components
            </TabsTrigger>
          </TabsList>

          {/* Usage Guide */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Component Usage Guide</CardTitle>
                <CardDescription>
                  Learn how to use Shared UI components in your projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Button */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Button</h3>
                    <Badge variant="outline">Basic</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex gap-2 mb-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Button {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Button{'>'}Click me{'</'}Button{'>'}</div>
                      <div>{'<'}Button variant="secondary"{'>'}Secondary{'</'}Button{'>'}</div>
                      <div>{'<'}Button variant="destructive"{'>'}Delete{'</'}Button{'>'}</div>
                      <div>{'<'}Button size="sm"{'>'}Small{'</'}Button{'>'}</div>
                      <div>{'<'}Button size="lg"{'>'}Large{'</'}Button{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Card */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Card</h3>
                    <Badge variant="outline">Layout</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md">
                      <Card className="max-w-md">
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card description</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Card content goes here</p>
                        </CardContent>
                        <CardFooter>
                          <Button>Action</Button>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Card{'>'}</div>
                      <div className="ml-2">{'<'}CardHeader{'>'}</div>
                      <div className="ml-4">{'<'}CardTitle{'>'}Title{'</'}CardTitle{'>'}</div>
                      <div className="ml-4">{'<'}CardDescription{'>'}Description{'</'}CardDescription{'>'}</div>
                      <div className="ml-2">{'</'}CardHeader{'>'}</div>
                      <div className="ml-2">{'<'}CardContent{'>'}Content{'</'}CardContent{'>'}</div>
                      <div className="ml-2">{'<'}CardFooter{'>'}Footer{'</'}CardFooter{'>'}</div>
                      <div>{'</'}Card{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Input & Form */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Input & Form</h3>
                    <Badge variant="outline">Form</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md">
                      <div className="space-y-4 max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="demo-email">Email</Label>
                          <Input id="demo-email" type="email" placeholder="Enter email" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="demo-checkbox" />
                          <Label htmlFor="demo-checkbox" className="cursor-pointer">Accept terms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="demo-switch" />
                          <Label htmlFor="demo-switch" className="cursor-pointer">Enable notifications</Label>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Input, Label, Checkbox, Switch {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}div className="space-y-2"{'>'}</div>
                      <div className="ml-2">{'<'}Label htmlFor="email"{'>'}Email{'</'}Label{'>'}</div>
                      <div className="ml-2">{'<'}Input id="email" type="email" placeholder="Enter email" /{'>'}</div>
                      <div>{'</'}div{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Alert */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Alert</h3>
                    <Badge variant="outline">Feedback</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md space-y-2">
                      <Alert>
                        <AlertTitle>Info</AlertTitle>
                        <AlertDescription>This is an informational message.</AlertDescription>
                      </Alert>
                      <Alert variant="destructive">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>This is an error message.</AlertDescription>
                      </Alert>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Alert, AlertTitle, AlertDescription {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Alert{'>'}</div>
                      <div className="ml-2">{'<'}AlertTitle{'>'}Title{'</'}AlertTitle{'>'}</div>
                      <div className="ml-2">{'<'}AlertDescription{'>'}Description{'</'}AlertDescription{'>'}</div>
                      <div>{'</'}Alert{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Dialog */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Dialog</h3>
                    <Badge variant="outline">Overlay</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Dialog{'>'}</div>
                      <div className="ml-2">{'<'}DialogTrigger asChild{'>'}</div>
                      <div className="ml-4">{'<'}Button{'>'}Open Dialog{'</'}Button{'>'}</div>
                      <div className="ml-2">{'</'}DialogTrigger{'>'}</div>
                      <div className="ml-2">{'<'}DialogContent{'>'}</div>
                      <div className="ml-4">{'<'}DialogHeader{'>'}</div>
                      <div className="ml-6">{'<'}DialogTitle{'>'}Title{'</'}DialogTitle{'>'}</div>
                      <div className="ml-6">{'<'}DialogDescription{'>'}Description{'</'}DialogDescription{'>'}</div>
                      <div className="ml-4">{'</'}DialogHeader{'>'}</div>
                      <div className="ml-4">{'<'}p{'>'}Content{'</'}p{'>'}</div>
                      <div className="ml-2">{'</'}DialogContent{'>'}</div>
                      <div>{'</'}Dialog{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Tabs */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Tabs</h3>
                    <Badge variant="outline">Navigation</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md">
                      <Tabs defaultValue="tab1" className="w-full max-w-md">
                        <TabsList>
                          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="tab1">Content for tab 1</TabsContent>
                        <TabsContent value="tab2">Content for tab 2</TabsContent>
                      </Tabs>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Tabs, TabsList, TabsTrigger, TabsContent {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Tabs defaultValue="tab1"{'>'}</div>
                      <div className="ml-2">{'<'}TabsList{'>'}</div>
                      <div className="ml-4">{'<'}TabsTrigger value="tab1"{'>'}Tab 1{'</'}TabsTrigger{'>'}</div>
                      <div className="ml-4">{'<'}TabsTrigger value="tab2"{'>'}Tab 2{'</'}TabsTrigger{'>'}</div>
                      <div className="ml-2">{'</'}TabsList{'>'}</div>
                      <div className="ml-2">{'<'}TabsContent value="tab1"{'>'}Content 1{'</'}TabsContent{'>'}</div>
                      <div className="ml-2">{'<'}TabsContent value="tab2"{'>'}Content 2{'</'}TabsContent{'>'}</div>
                      <div>{'</'}Tabs{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Badge */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Badge</h3>
                    <Badge variant="outline">Display</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm">
                      <div className="text-muted-foreground mb-2">// Import</div>
                      <div>import {'{'} Badge {'}'} from '@shared-ui'</div>
                      <div className="text-muted-foreground mt-4 mb-2">// Usage</div>
                      <div>{'<'}Badge{'>'}Default{'</'}Badge{'>'}</div>
                      <div>{'<'}Badge variant="secondary"{'>'}Secondary{'</'}Badge{'>'}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Advanced: Form with Validation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Form with Validation</h3>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  <div className="bg-muted p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                    <div className="text-muted-foreground mb-2">// Import</div>
                    <div>import {'{'} Form, FormField, FormItem, FormLabel, FormControl, FormMessage {'}'} from '@shared-ui'</div>
                    <div className="text-muted-foreground mt-4 mb-2">// Usage with react-hook-form</div>
                    <div>{`const form = useForm<formValues>()

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>`}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Colors */}
          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
                <CardDescription>
                  Our design system uses CSS variables for theming. All colors support light and dark modes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 bg-primary rounded-md border"></div>
                    <div className="text-sm font-medium">Primary</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--primary))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-secondary rounded-md border"></div>
                    <div className="text-sm font-medium">Secondary</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--secondary))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-destructive rounded-md border"></div>
                    <div className="text-sm font-medium">Destructive</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--destructive))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-muted rounded-md border"></div>
                    <div className="text-sm font-medium">Muted</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--muted))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-accent rounded-md border"></div>
                    <div className="text-sm font-medium">Accent</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--accent))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-card rounded-md border"></div>
                    <div className="text-sm font-medium">Card</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--card))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-popover rounded-md border"></div>
                    <div className="text-sm font-medium">Popover</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--popover))</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-background rounded-md border"></div>
                    <div className="text-sm font-medium">Background</div>
                    <div className="text-xs text-muted-foreground">hsl(var(--background))</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Border & Input</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 border-2 border-border rounded-md bg-background"></div>
                      <div className="text-sm font-medium">Border</div>
                      <div className="text-xs text-muted-foreground">hsl(var(--border))</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 border-2 border-input rounded-md bg-background"></div>
                      <div className="text-sm font-medium">Input</div>
                      <div className="text-xs text-muted-foreground">hsl(var(--input))</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography */}
          <TabsContent value="typography" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Typography Scale</CardTitle>
                <CardDescription>
                  Consistent typography system using Tailwind CSS utilities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold mb-2">Heading 1</div>
                    <div className="text-sm text-muted-foreground">text-4xl font-bold</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Heading 2</div>
                    <div className="text-sm text-muted-foreground">text-3xl font-bold</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold mb-2">Heading 3</div>
                    <div className="text-sm text-muted-foreground">text-2xl font-semibold</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">Heading 4</div>
                    <div className="text-sm text-muted-foreground">text-xl font-semibold</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium mb-2">Heading 5</div>
                    <div className="text-sm text-muted-foreground">text-lg font-medium</div>
                  </div>
                  <div>
                    <div className="text-base mb-2">Body Text</div>
                    <div className="text-sm text-muted-foreground">text-base (default)</div>
                  </div>
                  <div>
                    <div className="text-sm mb-2">Small Text</div>
                    <div className="text-sm text-muted-foreground">text-sm</div>
                  </div>
                  <div>
                    <div className="text-xs mb-2">Extra Small</div>
                    <div className="text-sm text-muted-foreground">text-xs</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Text Colors</h3>
                  <div className="space-y-2">
                    <div className="text-foreground">Foreground - Primary text color</div>
                    <div className="text-muted-foreground">Muted Foreground - Secondary text color</div>
                    <div className="text-destructive">Destructive - Error and warning text</div>
                    <div className="text-primary">Primary - Brand color text</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spacing */}
          <TabsContent value="spacing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>
                  Consistent spacing system using Tailwind's spacing scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[0.5, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map((size) => (
                    <div key={size} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-muted-foreground">
                        {size * 4}px
                      </div>
                      <div className="flex-1">
                        <div 
                          className="bg-primary h-8 rounded"
                          style={{ width: `${size * 4}px` }}
                        ></div>
                      </div>
                      <div className="w-24 text-sm font-mono text-muted-foreground">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Common Spacing Utilities</h3>
                  <div className="bg-muted p-4 rounded-md space-y-2 font-mono text-sm">
                    <div>p-4 = padding: 1rem (16px)</div>
                    <div>m-4 = margin: 1rem (16px)</div>
                    <div>gap-4 = gap: 1rem (16px)</div>
                    <div>space-y-4 = vertical spacing: 1rem (16px)</div>
                    <div>space-x-4 = horizontal spacing: 1rem (16px)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components */}
          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Component Library</CardTitle>
                <CardDescription>
                  54+ pre-built components ready to use
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    'Accordion', 'Alert', 'Alert Dialog', 'Aspect Ratio',
                    'Avatar', 'Badge', 'Breadcrumb', 'Button',
                    'Calendar', 'Card', 'Carousel', 'Chart',
                    'Checkbox', 'Collapsible', 'Command', 'Context Menu',
                    'Dialog', 'Drawer', 'Dropdown Menu', 'Form',
                    'Input', 'Label', 'Menubar', 'Navigation Menu',
                    'Popover', 'Progress', 'Radio Group', 'Scroll Area',
                    'Select', 'Separator', 'Sheet', 'Skeleton',
                    'Slider', 'Switch', 'Table', 'Tabs',
                    'Textarea', 'Toast', 'Toggle', 'Tooltip'
                  ].map((component) => (
                    <Badge key={component} variant="outline" className="justify-center p-2">
                      {component}
                    </Badge>
                  ))}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Component Examples</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Buttons</Label>
                      <div className="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Badges</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Alerts</Label>
                      <div className="space-y-2">
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertTitle>Info</AlertTitle>
                          <AlertDescription>
                            This is an informational alert message.
                          </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>
                            This is a destructive alert message.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Form Elements</Label>
                      <div className="space-y-4 max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="example-input">Input</Label>
                          <Input id="example-input" placeholder="Enter text..." />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="example-checkbox" />
                          <Label htmlFor="example-checkbox" className="cursor-pointer">
                            Accept terms and conditions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="example-switch" />
                          <Label htmlFor="example-switch" className="cursor-pointer">
                            Enable notifications
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for using Shared UI components effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Tree-shaking
              </h3>
              <p className="text-sm text-muted-foreground">
                Import only the components you need. The library is tree-shakeable, so unused components won't be included in your bundle.
              </p>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                import {'{'} Button, Card {'}'} from '@shared-ui'
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Customization
              </h3>
              <p className="text-sm text-muted-foreground">
                All components accept className props for easy customization. Use Tailwind utilities to extend or override styles.
              </p>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                {'<'}Button className="custom-class"{'>'}Custom Button{'</'}Button{'>'}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Theming
              </h3>
              <p className="text-sm text-muted-foreground">
                Customize the theme by updating CSS variables. All colors support light and dark modes automatically.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                TypeScript
              </h3>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with type definitions included. All components are fully typed for better developer experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-8">
          <p>Built with ❤️ using shadcn/ui, React, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Learn more about shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

