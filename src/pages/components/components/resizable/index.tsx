import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';

export default function ResizableOverview() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          The Resizable component provides resizable panel layouts. It consists of
          ResizablePanelGroup, ResizablePanel, and ResizableHandle components that work together to
          create draggable, resizable interfaces like code editors, dashboards, and split views.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">When to Use</h3>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          <li>Code editors with file trees</li>
          <li>Split view layouts</li>
          <li>Dashboard panels</li>
          <li>Resizable sidebars</li>
          <li>Any draggable panel interfaces</li>
        </ul>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Code className="w-5 h-5" />
            Basic Usage
          </CardTitle>
          <CardDescription>Simple resizable panels example</CardDescription>
        </CardHeader>
        <CardContent>
          <ResizablePanelGroup className="min-h-[200px] rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex justify-center items-center p-6 h-full">Panel 1</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex justify-center items-center p-6 h-full">Panel 2</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>

      <div className="p-4 font-mono text-sm rounded-md bg-muted">
        <div className="text-muted-foreground">
          import {'{'} ResizablePanelGroup, ResizablePanel, ResizableHandle {'}'} from 'shared-ui'
        </div>
        <div className="mt-2">
          <div className="text-muted-foreground">{'<'}</div>
          <div className="ml-4">
            {'<'}ResizablePanelGroup direction="horizontal"{'>'}
          </div>
          <div className="ml-8">
            {'<'}ResizablePanel{'>'}...{'</'}ResizablePanel{'>'}
          </div>
          <div className="ml-8">
            {'<'}ResizableHandle /{'>'}
          </div>
          <div className="ml-8">
            {'<'}ResizablePanel{'>'}...{'</'}ResizablePanel{'>'}
          </div>
          <div className="ml-4">
            {'</'}ResizablePanelGroup{'>'}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          <li>Horizontal and vertical layouts</li>
          <li>Draggable resize handles</li>
          <li>Minimum and maximum panel sizes</li>
          <li>Default size configuration</li>
          <li>Multiple panels support</li>
        </ul>
      </div>
    </div>
  );
}
